var {Shop, Item} = require('../src/gildedRoseRefactored.js');

describe("Gilded Rose", function() {
  beforeEach(function() {
    
  })
  describe("updateQuality", function() {
    describe("normal items", function() {
      beforeEach(function() {
        normalItem = new Item("item", 5, 5);
        gildedRose = new Shop([normalItem]);
      })

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