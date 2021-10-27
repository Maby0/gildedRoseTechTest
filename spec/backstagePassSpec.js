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
    it("when sellIn greater than 5 & 10 or lower, quality increases by 2", function() {
      pass.sellIn = 10;
      pass.updateItemQuality();
      expect(pass.quality).toEqual(17);
    })
  })
})