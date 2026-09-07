// Page navigation uses ordinary HTML links. JavaScript adds photos and gallery previews.
const content = window.portfolioContent || { photos: {}, artwork: [] };
document.querySelectorAll('[data-photo]').forEach(placeholder => {
  const src = content.photos[placeholder.dataset.photo];
  if (!src) return;
  const image = document.createElement('img');
  image.alt = placeholder.getAttribute('aria-label');
  image.onload = () => {
    placeholder.replaceChildren(image);
    placeholder.removeAttribute('role');
    placeholder.removeAttribute('aria-label');
  };
  image.src = src;
});
const gallery = document.querySelector('#art-gallery');
const lightbox = document.querySelector('#lightbox');
if (gallery && content.artwork.length) {
  document.querySelector('#gallery-empty').hidden = true;
  document.querySelector('#art-coming-soon').hidden = true;
  content.artwork.forEach(item => {
    const figure = document.createElement('figure');
    figure.className = 'art-piece';
    const link = document.createElement('a');
    link.href = item.src;
    link.setAttribute('aria-label', 'Enlarge ' + item.title);
    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.alt || item.title;
    image.loading = 'lazy';
    const caption = document.createElement('figcaption');
    caption.textContent = item.title;
    link.append(image);
    figure.append(link, caption);
    gallery.append(figure);
    link.addEventListener('click', event => {
      if (typeof lightbox.showModal !== 'function') return;
      event.preventDefault();
      const large = document.querySelector('#lightbox-image');
      large.alt = item.alt || item.title;
      document.querySelector('#lightbox-title').textContent = item.title;
      document.querySelector('#lightbox-caption').textContent = item.caption || '';
      large.onerror = () => { document.querySelector('#lightbox-caption').textContent = 'This image could not be loaded.'; };
      large.src = item.src;
      lightbox.showModal();
      document.body.classList.add('modal-open');
    });
  });
}
// Native dialogs handle Escape and keep keyboard focus inside while open.
document.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('close', () => document.body.classList.remove('modal-open'));
lightbox.addEventListener('click', event => {
  const box = lightbox.getBoundingClientRect();
  if (event.target === lightbox && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) lightbox.close();
});
