const { AgedBrie } = require('../src/agedBrie');

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
    it("does not increase item quality beyond 50", function() {
      agedBrie.quality = 50;
      agedBrie.updateItemQuality();
      expect(agedBrie.quality).toEqual(50);
    })
    it("can not have a quality lower than 0", function() {
      agedBrie.quality = -5;
      agedBrie.updateItemQuality();
      expect(agedBrie.quality).toEqual(0);
    })
  })
})