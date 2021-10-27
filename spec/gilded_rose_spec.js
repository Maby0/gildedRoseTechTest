const { Shop } = require('../src/gildedRoseRefactored.js');
const { Item, NormalItem } = require('../src/item')

describe("Gilded Rose", function() {
  beforeEach(function() {
    normalItem = new Item("item", 5, 5);
    gildedRose = new Shop([normalItem]);
  })

  describe("updateQuality", function() {
    
  })
});
