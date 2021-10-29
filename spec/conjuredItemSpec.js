const { ConjuredItem } = require('../src/conjuredItem');

describe("ConjuredItem", function() {
  beforeEach(function() {
    conjuredItem = new ConjuredItem("conjuredItem", 10, 10);
  })

  describe("updateItemQuality", function() {
    it("reduces sellIn by 1", function() {
      conjuredItem.updateItemQuality();
      expect(conjuredItem.sellIn).toEqual(9);
    })
    it("reduces quality by 2 if > 0", function() {
      conjuredItem.updateItemQuality();
      expect(conjuredItem.quality).toEqual(8);
    })
    it("does not reduce quality below 0", function() {
      conjuredItem.quality = 0;
      conjuredItem.updateItemQuality();
      expect(conjuredItem.quality).toEqual(0);
    })
    it("corrects quality if greater than max", function() {
      conjuredItem.quality = 55;
      conjuredItem.updateItemQuality();
      expect(conjuredItem.quality).toEqual(50);
    })
  })
})