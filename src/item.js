const minimumQuality = 0,
  maximumQuality = 50;

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

  updateItemQuality() {
    if (this._outOfDate()) {
      this.sellIn -= 1;
      this.quality -= 2;
    } else {
      this.sellIn -= 1;
      this.quality -= 1;
    }
    this._correctMinimumQuality()
  }

  _outOfDate() {
    return this.sellIn <= 0;
  }

  _correctMinimumQuality() {
    if (this.quality < 0) this.quality = minimumQuality;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateItemQuality() {
    this.sellIn -= 1
    this.quality += 1
    this._correctMaximumQuality()
  }

  _correctMaximumQuality() {
    if (this.quality > 50) this.quality = maximumQuality;
  }
}

module.exports = {
  Item,
  NormalItem,
  AgedBrie
}