
(function(){
  function toast(msg){
    let t = document.querySelector('.toast');
    if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(()=>{ t.classList.add('show'); });
    setTimeout(()=> t.classList.remove('show'), 2500);
  }

  function busy(btn, doneMsg){
    btn.setAttribute('aria-busy','true');
    const s = document.createElement('span'); s.className='spinner'; btn.appendChild(s);
    setTimeout(()=>{
      btn.removeAttribute('aria-busy'); s.remove();
      toast(doneMsg);
    }, 900);
  }

  const go = document.querySelector('.programs .search button');
  const input = document.querySelector('.programs .search input');
  if(go){
    go.addEventListener('click', ()=>{
      const q = (input && input.value.trim()) || 'programs';
      busy(go, `Showing results for “${q}” (demo).`);
    });
  }
})();
