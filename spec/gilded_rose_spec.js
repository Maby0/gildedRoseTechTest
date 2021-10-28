const { Shop } = require('../src/gildedRose.js');

describe("Gilded Rose", function() {
  const normalItem = jasmine.createSpyObj(
    'normalItem',
    ['updateItemQuality'],
    {
      name: 'normalItem',
      sellIn: '5',
      quality: '5'
    }
  )

  beforeEach(function() {
    gildedRose = new Shop([normalItem]);
  })

  describe("updateQuality", function() {
    it("calls updateItemQuality method for each item in array", function() {
      expect(gildedRose.updateQuality()).toEqual([normalItem]);
      expect(normalItem.updateItemQuality).toHaveBeenCalled();
    })
  })
});
