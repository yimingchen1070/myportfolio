# Customizing your portfolio

Open index.html in a browser, or use VS Code Live Server. No installation or build step is needed.

## Pages

- index.html: folder-style cover, with four clickable tabs.
- about.html: tall photo on the left, introduction and second photo on the right.
- projects.html: project gallery. Each card links to a detail page.
- project-portfolio.html: details for this portfolio website.
- art.html: your art gallery. Click an image to enlarge it; close with Escape, the Close button, or the backdrop.
- contact.html: your email, GitHub, Instagram, and LinkedIn.
- style.css: all colors, fonts, layout, responsive styles, and hover effects.
- content.js: your photos and artwork list.
- script.js: loads photos and adds gallery interactions.

## Add your photos

Create an images folder in this repository. Put your pictures in it, then edit content.js:

```js
photos: {
  portrait: 'images/me.jpg',
  snapshot: 'images/my-desk.jpg',
},
```

The portrait appears on the cover and the left side of About. The snapshot appears within the About text. Use a portrait-oriented photo for the first and a landscape photo for the second. Until valid photos are provided, the page shows labeled spaces.

## Add artwork

Inside the artwork array in content.js, add an entry per image:

```js
artwork: [
  {
    title: 'My drawing',
    src: 'images/drawing.jpg',
    alt: 'A pencil drawing of a tree beside a lake',
    caption: 'Pencil on paper, 2026',
  },
],
```

The coming-soon message disappears when artwork is added. File names must match exactly, including capitalization, when hosted on GitHub Pages. The gallery needs JavaScript enabled.

## Add a project

Copy the project-card link block in projects.html. Update the heading and link. Duplicate project-portfolio.html, rename it (for example project-robot.html), and replace its text with your new project's details. Point your card to that new page. You can replace the code-cover block with an image.

## Change your introduction or social links

Edit the text in about.html or the links in contact.html directly. Navigation is repeated in each HTML file so the site remains easy to read and works without a framework.

## Save to GitHub

Commit the six HTML pages, style.css, script.js, content.js, and your images folder. You can include this guide too. Backup folders do not need to be committed. Refresh the browser after saving; use Ctrl+F5 if old styling remains cached.
