const { Item } = require('./item');

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    this.sellIn --;
    this.quality -= 2;
    
  }
}

module.exports = { ConjuredItem }