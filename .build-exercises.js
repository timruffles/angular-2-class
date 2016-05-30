"use strict";

const marked = require('marked');
const fs = require("fs");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const encoding = { encoding: "utf8" };

for(let file of process.argv.slice(2)) {
  console.log(file);
  
  const html = marked(fs.readFileSync(file, encoding));
  const wrapped = `
    <!doctype html>
    <head>
      <link rel=stylesheet href="../app/node_modules/foundation-sites/dist/foundation.min.css">
      <link rel=stylesheet href="./style.css">
    </head>
    <body>
      ${html}
    </body>
  `;

  fs.writeFileSync(file.replace(/\.md$/, ".html"), 
    wrapped, encoding);
}
