const { NormalItem } = require('../src/normalItem');

describe("NormalItem < Item", function() {
  beforeEach(function() {
    normal = new NormalItem('normalItem', 5, 5)
  })

  describe("updateItemQuality", function() {
    it("reduces sellIn by 1", function() {
      normal.updateItemQuality();
      expect(normal.sellIn).toEqual(4);
    })
    it("reduces quality by 1 if it's > 0", function() {
      normal.updateItemQuality();
      expect(normal.quality).toEqual(4);
    })
    it("reduces quality by 2 if sellIn is <= 0", function() {
      normal.sellIn = 0;
      normal.updateItemQuality();
      expect(normal.quality).toEqual(3);
    })
    it("does not reduce item quality below 0 - in date", function() {
      normal.quality = 0;
      normal.updateItemQuality();
      expect(normal.quality).toEqual(0);
    })
    it("does not reduce item quality below 0 - out of date", function() {
      normal.quality = 1;
      normal.sellIn = 0;
      normal.updateItemQuality();
      expect(normal.quality).toEqual(0);
    })
    it("cannot exceed highest item quality (50)", function() {
      normal.quality = 55;
      normal.updateItemQuality();
      expect(normal.quality).toEqual(50);
    })
  })
})