# Nicole's portfolio

Open `index.html` in your browser. No installation or build step is needed.

- `index.html` contains your text, links, project cards, and gallery.
- `style.css` controls colors, layout, spacing, and mobile styles. Start with the color variables at the top to customize it.
- `script.js` adds the mobile menu, active navigation, and gallery dialog.

Your original introduction, contact information, GitHub link, and coming-soon messages are preserved. The portfolio card describes this website. The gallery preview is a placeholder, not an artwork attributed to you.

## Add a project

Copy the `<article class="project-card">` block in index.html. Change its heading, description, and repository link. If your repository is private, visitors will need access to see it.

## Add artwork

Create an `images` folder next to index.html and save your image inside it. Replace the sample gallery button with the following, using your own image path, title, and description. Duplicate the button for more artwork.

```html
<button class="art-card" data-src="images/my-art.jpg"
  data-title="My artwork" data-caption="A description of my artwork."
  aria-label="Enlarge My artwork" hidden>
  <img src="images/my-art.jpg" alt="Describe what the artwork shows" loading="lazy">
  <span class="art-label"><span>My artwork</span><span aria-hidden="true">↗</span></span>
</button>
```

The gallery supports mouse, touch, keyboard, a close button, and Escape. Navigation and contact links work without JavaScript. Reduced-motion preferences disable smooth scrolling and transitions.
