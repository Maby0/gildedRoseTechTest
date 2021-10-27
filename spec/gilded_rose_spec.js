const { Shop } = require('../src/gildedRoseRefactored.js');
const { Item, NormalItem } = require('../src/item')

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
