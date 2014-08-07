describe("jquery.blurry", function() {
  beforeEach(function() {
    this.image = $("<img src='maple.png'>");
    $("#fixtures").append(this.image);
  });

  afterEach(function() {
    $("#fixtures").empty();
  });

  it("should blur using canvas", function(done) {
    var image = this.image;
    this.image.load(function() {
      image.blurry(5);
      var canvas = $("#fixtures").children();
      chai.expect(canvas.prop("tagName")).to.equal("CANVAS");
      done();
    });
  });
});