const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-nav');
function setMenu(open,restoreFocus=false){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.hidden=!open;if(restoreFocus)toggle.focus();}
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
menu.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden)setMenu(false,true);});
document.addEventListener('click',event=>{if(!menu.hidden&&!event.target.closest('.header'))setMenu(false);});
document.addEventListener('focusin',event=>{if(!menu.hidden&&!event.target.closest('.header'))setMenu(false);});
matchMedia('(min-width: 960px)').addEventListener('change',event=>{if(event.matches)setMenu(false);});
