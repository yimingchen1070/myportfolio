# Minimal portfolio

Open index.html in a browser, or use VS Code Live Server. No build step is needed.

Pages: index.html (cover), about.html, projects.html, project-portfolio.html, art.html, contact.html.

style.css controls the entire black-and-white design. The graduation photo is images/nicole-grey.png. Existing contact links remain in contact.html.

## Add artwork

Save your images in images/, then add entries in the artwork array in content.js:

```js
{ title: 'Artwork title', src: 'images/my-art.jpg', alt: 'Describe the artwork', caption: 'Medium, year' },
```

The gallery automatically replaces the coming-soon state when entries exist. Images retain their original colours. Click an artwork for a large preview; Escape or Close returns to the gallery. Image file names must match exactly, including capitalization.

## Add projects

Copy the project-card link in projects.html. Duplicate project-portfolio.html for a new detail page, change its content, and link the new card to it.

Commit all changed HTML/CSS/JS files and any new images, then push through GitHub Desktop. Old unused images are retained on disk but do not appear in this version.
