
      const hamburger = document.querySelector('.hamburger i');
      const navMenu = document.querySelector('.nav-link');

      hamburger.addEventListener('click',()=> {

        hamburger.classList.toggle('active');
      });

      navMenu.addEventListener('click',(e) => {
        if (e.target.tagName === 'A'){
          hamburger.classList.remove('active');
        }
      });

    
  