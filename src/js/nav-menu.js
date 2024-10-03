(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openMenuBtn: document.querySelector('[data-menu-open]'),
      // Додати атрибут data-modal-close на кнопку закриття
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      // Додати атрибут data-modal на бекдроп модалки
      backdrop: document.querySelector('[data-menu-backdrop]'),
      menu: document.querySelector('[data-menu]'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.backdrop.addEventListener('click', closeMenu);
    refs.menu.addEventListener('click', (e) => {
      if (e.target.nodeName === 'A') {
        closeMenu();
      }
    });

    function toggleMenu() {
      refs.menu.classList.toggle('is-open');
    }

    function closeMenu() {
      refs.menu.classList.toggle('is-open');
    }
  })();