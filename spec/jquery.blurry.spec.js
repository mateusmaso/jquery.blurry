describe("jquery.blurry", function() {
  beforeEach(function() {
    this.fixtures = $("#fixtures");
    this.image = $("<img src='maple.png'>");
    this.fixtures.append(this.image);
  });

  afterEach(function() {
    this.fixtures.empty();
  });

  it("should blur using canvas", function(done) {
    var image = this.image;
    var fixtures = this.fixtures;
    this.image.load(function() {
      image.blurry(5);
      var canvas = fixtures.children();
      chai.expect(canvas.prop("tagName")).to.equal("CANVAS");
      done();
    });
  });
});