const { Item, minimumQuality, maximumQuality, noSellByDate } = require('./item');

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    if (this.sellIn !== 0) this.sellIn = noSellByDate;
    this._correctMinimumQuality()
    this._correctMaximumQuality()
  }

  _correctMinimumQuality() {
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }

  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

module.exports = { Sulfuras }