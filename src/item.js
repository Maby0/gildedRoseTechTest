const minimumQuality = 0,
  maximumQuality = 50,
  noSellByDate = 0;

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class NormalItem extends Item {
  constructor(name, sellIn, quality) {
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
    if (this.quality < minimumQuality) this.quality = minimumQuality;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateItemQuality() {
    this.sellIn -= 1
    this.quality += 1
    this._correctMaximumQuality()
  }

  _correctMaximumQuality() {
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    if (this.sellIn !== 0) this.sellIn = noSellByDate;
    if (this.quality > maximumQuality) this.quality = maximumQuality;
  }
}

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateItemQuality() {
    if (this.sellIn > 10) {
      this.sellIn -= 1;
      this.quality += 1;
    } 
  }
}

module.exports = {
  Item,
  NormalItem,
  AgedBrie,
  Sulfuras,
  BackstagePass
}