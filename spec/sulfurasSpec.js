const { Sulfuras } = require('../src/item');

describe("Sulfuras < Item", function() {
  beforeEach(function() {
    sulfuras = new Sulfuras('Sulfuras', 1, 51)
    sulfuras.updateItemQuality();
  })

  describe("updateItemQuality", function() {
    it("changes sellIn to 0 if it's not 0 (to reflect a no sell-by date)", function() {
      expect(sulfuras.sellIn).toEqual(0);
    })
    it("changes quality to 50 if > 50", function() {
      expect(sulfuras.quality).toEqual(50);
    })
  })
})