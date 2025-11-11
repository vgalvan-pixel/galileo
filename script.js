function toggleMenu(){
      const btn = document.querySelector('.menu-toggle');
      const menu = document.getElementById('menu');
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    document.getElementById('year').textContent = new Date().getFullYear();
