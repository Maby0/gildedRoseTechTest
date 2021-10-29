const { Item, minimumQuality, maximumQuality } = require('./item');

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    this.sellIn --;
    this.quality -= 2;
    this._correctMinimumQuality();
    this._correctMaximumQuality();
  }
  _correctMinimumQuality() {
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }
  
  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

module.exports = { ConjuredItem }