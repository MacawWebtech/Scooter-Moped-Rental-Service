document.addEventListener('DOMContentLoaded',()=>{
  const pw=document.querySelector('#registerPassword');
  const toggle=document.querySelector('.register-password-toggle');
  if(pw&&toggle)toggle.addEventListener('click',()=>{const show=pw.type==='password';pw.type=show?'text':'password';toggle.textContent=show?'Hide':'Show';toggle.setAttribute('aria-label',show?'Hide password':'Show password')});
  const form=document.querySelector('#registerForm');
  if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;location.href='login.html'});
});
