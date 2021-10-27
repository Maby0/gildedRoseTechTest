const { AgedBrie } = require('../src/item');

describe("AgedBrie < Item", function() {
  beforeEach(function() {
    agedBrie = new AgedBrie('agedBrie', 5, 5);
    agedBrie.updateItemQuality();
  })

  describe("updateItemQuality", function() {
    it("reduces sellIn by 1", function() {
      expect(agedBrie.sellIn).toEqual(4);
    })
    it("increases quality by 1", function() {
      expect(agedBrie.quality).toEqual(6);
    })
  })
})