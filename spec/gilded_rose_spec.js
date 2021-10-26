var {Shop, Item} = require('../src/gildedRoseRefactored.js');

describe("Gilded Rose", function() {
  beforeEach(function() {
    
  })

  it("should foo", function() {
    const basicItem = new Item("item", 1, 1)
    const gildedRose = new Shop([basicItem]);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].sellIn).toEqual(0);
    expect(gildedRose.items[0].quality).toEqual(0);
  });

});
