const
  { NormalItem } = require('./normalItem'),
  { AgedBrie } = require('./agedBrie'),
  { Sulfuras } = require('./sulfuras'),
  { BackstagePass } = require('./backstagePass');

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      item.updateItemQuality();
    })
    return this.items;
  }
}

module.exports = {
  Shop,
  NormalItem,
  AgedBrie,
  Sulfuras,
  BackstagePass
}
