const lowestPossibleQuality = 0;

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
    this._correctNegativeQuality()
  }

  

  _outOfDate() {
    return this.sellIn <= 0;
  }

  _correctNegativeQuality() {
    if (this.quality < 0) this.quality = lowestPossibleQuality;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateItemQuality() {
    
  }
}

module.exports = {
  Item,
  NormalItem,
  AgedBrie
}