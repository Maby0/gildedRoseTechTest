const { Item, minimumQuality, maximumQuality } = require('./item');

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    this.sellIn --;
    this.quality ++;
    if (this._eventSoon()) this.quality ++;
    if (this._eventImminent()) this.quality ++;
    if (this._eventBeen()) this.quality = minimumQuality;
    this._correctMinimumQuality();
    this._correctMaximumQuality();
  }

  _eventSoon() {
    return this.sellIn <= 10;
  }

  _eventImminent() {
    return this.sellIn <= 5 && this.sellIn > 0;
  }

  _eventBeen() {
    return this.sellIn <= 0
  }

  _correctMinimumQuality() {
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }

  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

module.exports = { BackstagePass }