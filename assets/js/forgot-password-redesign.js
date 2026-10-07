(()=>{
  const form=document.querySelector('#recoveryForm');
  const status=document.querySelector('#recoveryStatus');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.reportValidity()) return;
      const email=form.elements.email.value.trim();
      if(status) status.textContent=`Reset instructions prepared for ${email}.`;
      const btn=form.querySelector('button[type="submit"]');
      if(btn){btn.textContent='Reset link ready';btn.disabled=true;}
    });
  }
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.08});
    document.querySelectorAll('.forgot-new section').forEach(section=>io.observe(section));
  }
})();
