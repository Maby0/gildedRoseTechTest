const { Item, minimumQuality, maximumQuality } = require('./item');

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    if (this.sellIn > 10) {
      this.sellIn -= 1;
      this.quality += 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.sellIn -= 1;
      this.quality += 2;
    } else if (this.sellIn <= 0) {
      this.sellIn -= 1;
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.sellIn -= 1;
      this.quality += 3;
    }
    this._correctMaximumQuality();
  }

  _correctMinimumQuality() {
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }

  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

module.exports = { BackstagePass }