const {Shop, Item, NormalItem} = require('../src/gildedRoseRefactored.js');
// import??

describe("Gilded Rose", function() {
  beforeEach(function() {
    normalItem = new Item("item", 5, 5);
    gildedRose = new Shop([normalItem]);
  })

  describe("updateQuality", function() {
    it("should not reduce item quality below 0", function() {
      gildedRose.items[0].quality = 0;
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(0);
    })

    describe("normal items", function() {
      describe('when sellIn is >= 0', function() {  
        beforeEach(function() {
          gildedRose.updateQuality()
        })

        it("should reduce item sellIn property by 1", function() {
          expect(gildedRose.items[0].sellIn).toEqual(4);
        });

        it("should reduce item quality property by 1", function() {
          expect(gildedRose.items[0].quality).toEqual(4);
        })
      })

      describe('when sellIn is < 0', function() {
        it("should reduce quality property by 2", function() {
          gildedRose.items[0].sellIn = -1;
          gildedRose.updateQuality();
          expect(gildedRose.items[0].quality).toEqual(3);
        })
      })
    })
  })
});

describe("NormalItem < Item", function() {
  beforeEach(function() {
    normal = new NormalItem('normalItem', 5, 5)
  })

  describe("updateQuality", function() {
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
  })
})

describe("AgedBrie < Item", function() {
  beforeEach(function() {
    agedBrie = new AgedBrie('agedBrie', 5, 5);
  })
})