const supertest = require("supertest-as-promised");
const assert = require("chai").assert;
const _ = require("lodash");
const app = require("./index");
const request = supertest(app);

describe("search", function() {

  it("finds products", function() {
    return search("Tyrannosaurus")
      .expect(200)
      .then(function(resp) {
        assertFind(resp.body, p => p.name === "Life Size Tyrannosaurus Skeleton")
      })
  })

  it("defaults to 25 per page", function() {
    return search("")
      .expect(200)
      .then(function(resp) {
        assert.lengthOf(resp.body, 25);
      });
  })

  it("paginates", function() {
    return search("")
      .expect(200)
      .then(function({ body: results1 }) {
        return search("", { page: 2 })
          .expect(200)
          .then(function({ body: results2 }) {
            assert.notEqual(results1[0].id, results2[0].id)
          });
      });
  })

  it("returns empty when past last page", function() {
    return search("", { page: 1e5 })
      .expect(200)
      .then(function({ body }) {
        assert.lengthOf(body, 0)
      });
  })

  it("respects categories", function() {
    return search("Tyrannosaurus", { category: 'ebooks' })
      .expect(200)
      .then(function(resp) {
        assert.lengthOf(resp.body, 0);
      });
  })

  function search(q, opts = {}) {
    return request.get("/products")
      .query(_.defaults({
        q,
      }, opts))
  }

  function assertFind(xs, finder, msg = "") {
    const [first, ...rest] = _.filter(xs, finder); 

    assert(first, msg || `could not find item with ${finder}`);
    assert.lengthOf(rest, 0, 'found more than one item!' + msg);
  }
    
})
