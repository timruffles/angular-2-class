
const seedRandom = require("seed-random");
const express = require("express");
const routes = new express.Router;
const _ = require("lodash");
const getData = _.memoize(loadData);
const fs = require("fs");
const crypto = require("crypto");

module.exports = exports = routes;

routes.get("/products", function(req, res) {

  let data = getData();
  const q = req.query.q ? req.query.q.toLowerCase() : "";
  const category = req.query.category ? req.query.category.toLowerCase() : false;
  const page = (parseInt(req.query.page) || 1) - 1;
  const pageSize = 25;

  if(q || category) {
    data = _.filter(data, d => {
      return d.name.toLowerCase().includes(q) && (!category || d.category === category);
    })
  }


  data = data.slice(page * pageSize, (page + 1) * pageSize);

  res.send(data);

  function invalid(error) {
    res.sendStatus(400)
       .send({ error });
  }
  
});

function loadData() {
  const container = __dirname + "/data";
  return _(fs.readdirSync(container))
    .filter(p => /\.json$/.test(p))
    .map(p => {
      const [_all, category] = /([\w\-]+?)-\d+\.json/.exec(p);
      const data = require(container + "/" + p)
      data.category = category;
      return data;
    })
    .filter(d => !d.stickied)
    .map(d => d.data.children.map((p) => formatAsProduct(p, d.category)))
    .reduce((a, item) => a.concat(item), [])
}

function formatAsProduct(s, category) {
  
  s = s.data;

  const price = /($|£|€)\d+(\.\d+)/.test(s.title) || deterministicPrice(s);

  return {
    name: s.title,
    category,
    id: seedRandom(s.id)() * 1e9 | 0,
    description: s.title,
    price,
  };
}

function deterministicPrice(s) {
  return Math.floor(seedRandom(s.id)() * 50);
}
