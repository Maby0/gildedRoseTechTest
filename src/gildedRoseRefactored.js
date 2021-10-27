class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class NormalItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality() {
    if (this.quality > 0) {
      this.sellIn -= 1
      this.quality -= 1
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality -= 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality += 1;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality += 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality += 1;
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality -= 1;
              }
            }
          } else {
            item.quality -= item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality += 1;
          }
        }
      }
    })

    return this.items;
  }

  _updateNormalItemQuality() {

  }
  // should be in a constant??
  _isSpecialItem(item) {
    const specialItems = [
      'Aged Brie', 
      'Sulfuras, Hand of Ragnaros', 
      'Backstage passes to a TAFKAL80ETC concert'
    ];
    return specialItems.includes(item.name);
  }
}
module.exports = {
  Item,
  NormalItem,
  Shop
}
