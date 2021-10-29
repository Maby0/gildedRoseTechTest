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
    
  })
})