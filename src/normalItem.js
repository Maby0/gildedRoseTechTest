const { Item, minimumQuality, maximumQuality } = require('./item');


class NormalItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateItemQuality() {
    this.sellIn --;
    this.quality --;
    if(this._outOfDate()) this.quality --;
    this._correctMinimumQuality();
    this._correctMaximumQuality();
  }

  _outOfDate() {
    return this.sellIn <= 0;
  }

  _correctMinimumQuality() {
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }

  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

module.exports = { NormalItem }