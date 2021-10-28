const { Item, minimumQuality, maximumQuality } = require('./item');

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    if (this._eventNotImminent()) {
      this.sellIn -= 1;
      this.quality += 1;
    } else if (this._eventSoon()) {
      this.sellIn -= 1;
      this.quality += 2;
    } else if (this._eventImminent()) {
      this.sellIn -= 1;
      this.quality += 3;
    } else if (this._eventBeen()) {
      this.sellIn -= 1;
      this.quality = minimumQuality;
    }
    this._correctMinimumQuality();
    this._correctMaximumQuality();
  }

  _eventNotImminent() {
    return this.sellIn > 10;
  }

  _eventSoon() {
    return this.sellIn <= 10 && this.sellIn > 5;
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