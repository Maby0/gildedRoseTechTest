const { BackstagePass } = require('../src/item');

describe("BackstagePass < Item", function() {
  beforeEach(function() {
    pass = new BackstagePass("Pass", 15, 15);
  })

  describe("updateItemQuality", function() {
    it("reduces sellIn by 1", function() {
      pass.updateItemQuality();
      expect(pass.sellIn).toEqual(14);
    })
  })
})