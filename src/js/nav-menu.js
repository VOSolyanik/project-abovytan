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

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);
  refs.backdrop.addEventListener('click', closeMenu);
  refs.menu.querySelectorAll('a, button').forEach(item => {
    item.setAttribute('tabindex', '-1');
  });
  refs.menu.addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      closeMenu();
    }
  });

  function openMenu() {
    refs.menu.classList.add('is-open');
    refs.menu.setAttribute('aria-hidden', false);
    refs.menu.querySelectorAll('a, button').forEach(item => {
      item.setAttribute('tabindex', '0');
    });
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
    refs.menu.setAttribute('aria-hidden', true);
    refs.menu.querySelectorAll('a, button').forEach(item => {
      item.setAttribute('tabindex', '-1');
    });
  }
})();
