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

for(const file of process.argv.slice(2)) {
  fs.writeFileSync(file.replace(/\.md$/, ".html"), 
    marked(fs.readFileSync(file, encoding)), encoding);
}
