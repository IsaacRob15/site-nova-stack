'use strict';
document.documentElement.classList.add('js-enabled');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
const motionButton = document.querySelector('.motion-toggle');
function setMotion(value) {
  paused = value;
  document.documentElement.classList.toggle('motion-paused', value);
  motionButton.setAttribute('aria-pressed', String(value));
  motionButton.setAttribute('aria-label', value ? 'Ativar movimento' : 'Pausar movimento');
  motionButton.innerHTML = value ? '<span aria-hidden="true">▷</span> <span>Ativar movimento</span>' : '<span aria-hidden="true">Ⅱ</span> <span>Pausar movimento</span>';
}
setMotion(paused);
motionButton.addEventListener('click', () => setMotion(!paused));
reducedMotion.addEventListener('change', e => setMotion(e.matches));
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Abrir menu');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  closeMenu();
  const target = document.querySelector(a.hash);
  target.setAttribute('tabindex', '-1');
  target.focus({preventScroll:true});
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', e => {
  if (!e.target.closest('.header') && nav.classList.contains('open')) closeMenu(nav.contains(document.activeElement));
});
document.addEventListener('focusin', e => { if (!e.target.closest('.header')) closeMenu(); });
matchMedia('(min-width:701px)').addEventListener('change', () => closeMenu());
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => {
  document.querySelectorAll('input[name="service"]').forEach(input => input.checked = input.value === a.dataset.service);
  clearServiceError();
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const selected = form.elements.service.value;
  const serviceError = document.querySelector('#service-error');
  const nameError = document.querySelector('#name-error');
  serviceError.hidden = Boolean(selected);
  serviceError.textContent = selected ? '' : 'Escolha um serviço ou a opção de ajuda para continuar.';
  form.querySelectorAll('[name="service"]').forEach(input => input.setAttribute('aria-invalid', String(!selected)));
  nameError.hidden = Boolean(name);
  nameError.textContent = name ? '' : 'Digite seu nome para preparar a mensagem.';
  form.elements.name.setAttribute('aria-invalid', String(!name));
  if (!selected || !name) {
    (!selected ? form.querySelector('[name="service"]') : form.elements.name).focus();
    return;
  }
  const idea = form.elements.idea.value.trim();
  const message = `Olá, Nova Stack! Meu nome é ${name}.\n\nTenho interesse em: ${selected}.` + (idea ? `\n\nMinha ideia: ${idea}` : '') + '\n\nGostaria de conversar sobre um projeto e solicitar um orçamento.';
  const url = 'https://wa.me/5547991717916?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  const note = document.querySelector('#form-note');
  note.replaceChildren(document.createTextNode('Sua mensagem está pronta. Se a nova aba não abriu, '));
  const fallback = document.createElement('a'); fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer'; fallback.textContent = 'continue no WhatsApp'; note.append(fallback, document.createTextNode('.'));
});
document.querySelector('#client-name').addEventListener('input', e => {
  e.target.removeAttribute('aria-invalid');
  document.querySelector('#name-error').hidden = true;
});
function clearServiceError() {
  document.querySelector('#service-error').hidden = true;
  document.querySelectorAll('[name="service"]').forEach(input => input.removeAttribute('aria-invalid'));
}
document.querySelectorAll('[name="service"]').forEach(input => input.addEventListener('change', clearServiceError));

// Perspective-projected chrome mesh: a four-point star and a continuous orbital ring.
// No external render dependency; a static brand image remains when canvas is unavailable.
const canvas = document.querySelector('#orbit');
const ctx = canvas.getContext('2d', { alpha: true });
if (ctx) {
  document.documentElement.classList.add('canvas-ready');
  const hero = document.querySelector('.hero');
  const copy = document.querySelector('.hero-copy');
  const caption = document.querySelector('.orbit-caption');
  const stage = document.querySelector('.hero-stage');
  let width = 0, height = 0, dpr = 1, mobile = false;
  let mouseX = 0, mouseY = 0, pointerX = 0, pointerY = 0;
  let last = 0, time = 0, progress = 0, inView = true, dirty = true;
  let frame = 0;
  function schedule() {
    if (!frame && inView && !document.hidden) frame = requestAnimationFrame(render);
  }
  function invalidate() { dirty = true; schedule(); }
  const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
  const dot = (a,b) => a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
  const sub = (a,b) => [a[0]-b[0],a[1]-b[1],a[2]-b[2]];
  const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const normalize = a => { const n = Math.hypot(...a)||1; return a.map(v=>v/n); };
  const light = normalize([-1,-1.4,2]);
  const secondary = normalize([1,.3,1]);
  const mesh = [];
  const vertices = [];
  const samples = 96;
  for(let i=0;i<samples;i++) {
    const a=i/samples*Math.PI*2;
    const x=Math.cos(a),y=Math.sin(a);
    vertices.push([1.43*Math.sign(x)*Math.pow(Math.abs(x),3.8),1.43*Math.sign(y)*Math.pow(Math.abs(y),3.8),0]);
  }
  // The center is lifted to create broad reflective bevels around the silhouette.
  for(let i=0;i<samples;i++) {
    const a=vertices[i],b=vertices[(i+1)%samples];
    const innerA=[a[0]*.2,a[1]*.2,.13],innerB=[b[0]*.2,b[1]*.2,.13];
    mesh.push({p:[[0,0,.17],innerA,innerB],kind:0});
    mesh.push({p:[innerA,a,b],kind:0},{p:[innerA,b,innerB],kind:0});
    mesh.push({p:[[0,0,-.16],b,a],kind:0});
  }
  // Tilted torus around the star, echoing the supplied Nova Stack symbol.
  const segments=96, tubeSides=6;
  function ringVertex(i,j) {
    const a=i/segments*Math.PI*2,b=j/tubeSides*Math.PI*2;
    let x=(1.12+.022*Math.cos(b))*Math.cos(a),y=(1.12+.022*Math.cos(b))*Math.sin(a),z=.022*Math.sin(b);
    const ry=y*Math.cos(.98)-z*Math.sin(.98),rz=y*Math.sin(.98)+z*Math.cos(.98);
    return [x*Math.cos(-.55)-ry*Math.sin(-.55),x*Math.sin(-.55)+ry*Math.cos(-.55),rz];
  }
  for(let i=0;i<segments;i++) for(let j=0;j<tubeSides;j++) {
    const a=ringVertex(i,j),b=ringVertex(i+1,j),c=ringVertex(i+1,j+1),d=ringVertex(i,j+1);
    mesh.push({p:[a,b,c],kind:1},{p:[a,c,d],kind:1});
  }
  // Stable seeded starfield, not a new random layout on each frame.
  let seed=27; const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
  const stars=Array.from({length:65},()=>[random(),random(),random(),random()]);
  function resize() {
    width=canvas.clientWidth;height=canvas.clientHeight;mobile=width<700;dpr=Math.min(window.devicePixelRatio||1,1.5);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);invalidate();
  }
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry])=>{
    inView=entry.isIntersecting;
    if (!inView) { cancelAnimationFrame(frame); frame=0; }
    else invalidate();
  }).observe(hero);
  window.addEventListener('pointermove',e=>{if(inView && !paused && e.pointerType==='mouse'){mouseX=(e.clientX/width-.5)*.12;mouseY=(e.clientY/height-.5)*.08;}},{passive:true});
  window.addEventListener('scroll',invalidate,{passive:true});
  motionButton.addEventListener('click',invalidate);
  reducedMotion.addEventListener('change',invalidate);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame=0; }
    else invalidate();
  });
  function rotate(p,ax,ay,az) {
    const cx=Math.cos(ax),sx=Math.sin(ax),cy=Math.cos(ay),sy=Math.sin(ay),cz=Math.cos(az),sz=Math.sin(az);
    const y=p[1]*cx-p[2]*sx,z=p[1]*sx+p[2]*cx,x=p[0]*cy+z*sy,z2=-p[0]*sy+z*cy;
    return [x*cz-y*sz,x*sz+y*cz,z2];
  }
  function render(now) {
    frame=0;
    if(!inView || document.hidden)return;
    if(now-last<32) { schedule(); return; }
    if(paused&&!dirty)return;
    const elapsed=Math.min((now-last)/1000,.05);last=now;
    if(!paused)time+=elapsed;
    if(dirty) progress=window.innerHeight<=700?0:clamp(-hero.getBoundingClientRect().top/Math.max(1,hero.offsetHeight-window.innerHeight),0,1);
    const p=paused?0:progress;
    pointerX+=(mouseX-pointerX)*.05;pointerY+=(mouseY-pointerY)*.05;
    ctx.clearRect(0,0,width,height);
    const cx=width*(mobile?.54:.73)-p*width*.05;
    const cy=height*(mobile?.32:.38)-p*height*.13;
    const scale=Math.min(width*(mobile?.285:.19),height*.21)*(1+p*1.35);
    const fade=1-clamp((p-.7)/.3,0,1)*.85;
    ctx.globalAlpha=fade;
    for(const s of stars) {
      const x=s[0]*width,y=(s[1]*height-time*s[2]*1.5+height*10)%height;
      ctx.fillStyle=`rgba(175,195,225,${.1+s[2]*.32})`;ctx.beginPath();ctx.arc(x,y,s[2]>.85?1:.5,0,Math.PI*2);ctx.fill();
    }
    // A distant, fine orbital path anchors the sculpture without clutter.
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-.42+p*.15);ctx.strokeStyle='#a1bbdf18';ctx.lineWidth=.6;
    ctx.beginPath();ctx.ellipse(0,0,scale*2.1,scale*.63,0,0,Math.PI*2);ctx.stroke();ctx.restore();
    const ax=-.12+Math.sin(time*.22)*.08+(paused?0:pointerY)+p*.4;
    const ay=-.22+Math.sin(time*.18)*.14+(paused?0:pointerX)+p*.65;
    const az=-.09+Math.sin(time*.16)*.04+p*.3;
    const faces=[];
    for(const face of mesh) {
      const points=face.p.map(v=>rotate(v,ax,ay,az));
      const normal=normalize(cross(sub(points[1],points[0]),sub(points[2],points[0])));
      if(normal[2]<-.15) continue;
      const diffuse=Math.abs(dot(normal,light));
      const sheen=Math.pow(Math.abs(dot(normal,secondary)),12);
      const band=Math.pow(.5+.5*Math.sin(normal[0]*5+normal[1]*2+time*.08),3);
      const brightness=clamp(35+diffuse*127+sheen*95+band*65,22,252);
      faces.push({points,z:points.reduce((s,v)=>s+v[2],0)/3,brightness,kind:face.kind});
    }
    faces.sort((a,b)=>a.z-b.z);
    for(const face of faces) {
      const b=face.brightness;
      const color=`rgb(${Math.round(b*.91)},${Math.round(b*.95)},${Math.round(Math.min(255,b+7))})`;
      ctx.fillStyle=color;ctx.strokeStyle=color;ctx.lineWidth=.45;
      ctx.beginPath();face.points.forEach((point,i)=>{const perspective=4.5/(4.5-point[2]);const x=cx+point[0]*scale*perspective,y=cy+point[1]*scale*perspective;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.closePath();ctx.fill();ctx.stroke();
    }
    ctx.globalAlpha=1;
    copy.style.transform=`translateY(${-p*75}px)`;
    // Keep the primary message and its link readable throughout the scroll scene.
    copy.style.opacity='1';
    caption.style.opacity=String(1-p*2);
    stage.style.setProperty('--progress',`${8+progress*92}%`);
    dirty=false;
    if(!paused) schedule();
  }
  resize();
}
