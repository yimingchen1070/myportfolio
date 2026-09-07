// The navigation still works without JavaScript. On small screens, add a menu.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

// Highlight the section currently being read.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -45% 0px' });
  document.querySelectorAll('main > section, #contact').forEach(section => observer.observe(section));
}

// Native dialog provides keyboard focus trapping and Escape-to-close behavior.
// Add data-src="images/artwork.jpg" to any art-card to show a real image.
const dialog = document.querySelector('#art-dialog');
const media = document.querySelector('#dialog-media');
if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('.art-card').forEach(card => {
    card.hidden = false;
    card.addEventListener('click', () => {
      media.replaceChildren();
      if (card.dataset.src) {
        const image = document.createElement('img');
        image.src = card.dataset.src;
        image.alt = card.dataset.title;
        image.addEventListener('error', () => { media.textContent = 'This artwork could not be loaded.'; });
        media.append(image);
      } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'art-placeholder';
        placeholder.textContent = '[ your art here ]';
        media.append(placeholder);
      }
      document.querySelector('#dialog-title').textContent = card.dataset.title;
      document.querySelector('#dialog-caption').textContent = card.dataset.caption || '';
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
}
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
