(()=>{const root=document.documentElement,theme=document.querySelector('.theme'),direction=document.querySelector('.direction'),header=document.querySelector('.header'),menu=document.querySelector('.menu');
const save=(key,value)=>{try{localStorage.setItem(key,value)}catch(e){}};
const sync=()=>{if(!theme||!direction)return;const dark=root.dataset.theme==='dark';theme.setAttribute('aria-pressed',String(dark));theme.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');direction.setAttribute('aria-pressed',String(root.dir==='rtl'));direction.setAttribute('aria-label',root.dir==='rtl'?'Switch to left-to-right layout':'Switch to right-to-left layout')};sync();
theme&&theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';save('ridey-theme',root.dataset.theme==='dark'?'dark':'normal');sync()});direction&&direction.addEventListener('click',()=>{root.dir=root.dir==='rtl'?'ltr':'rtl';save('ridey-direction',root.dir);sync()});menu&&menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
const filters=[...document.querySelectorAll('[data-filter]')];function filter(value){filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));document.querySelectorAll('.ride-card').forEach(c=>c.hidden=!(value==='all'||c.dataset.category===value||value==='weekend'&&c.dataset.weekend==='true'))}filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));document.querySelectorAll('[data-select]').forEach(a=>a.addEventListener('click',()=>filter(a.dataset.select)));
const today=new Date();const localDate=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');document.querySelectorAll('input[type=date]').forEach(i=>i.min=localDate);
document.addEventListener('click',e=>{document.querySelectorAll('.nav-group[open]').forEach(d=>{if(!d.contains(e.target))d.open=false})});document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.nav-group').forEach(d=>d.open=false);if(header&&menu){header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}}});
})();

/* Active link highlighting for header, dropdown and footer links */
(()=>{const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const alias={'blog-details.html':'blog.html','service-details.html':'services.html','scooter-details.html':'fleet.html','booking-confirmation.html':'book-now.html','admin-dashboard.html':'customer-dashboard.html'};
const target=alias[file]||file;const page=h=>((h||'').split(/[?#]/)[0].split('/').pop()||'').toLowerCase();
const mark=a=>{a.classList.add('is-active');a.setAttribute('aria-current','page')};
const nav=document.getElementById('navigation');
if(nav){let direct=false;nav.querySelectorAll(':scope>a').forEach(a=>{if(page(a.getAttribute('href'))===target){mark(a);direct=true}});
nav.querySelectorAll('.nav-group').forEach(g=>{let hit=false;g.querySelectorAll('.drop a').forEach(a=>{if(page(a.getAttribute('href'))===target){mark(a);hit=true}});if(hit&&!direct)g.querySelector('summary').classList.add('is-active')})}
document.querySelectorAll('.header-tools a.btn').forEach(a=>{if(page(a.getAttribute('href'))===target)mark(a)});
document.querySelectorAll('footer .footer-grid a:not(.brand)').forEach(a=>{if(page(a.getAttribute('href'))===target)mark(a)});
})();
