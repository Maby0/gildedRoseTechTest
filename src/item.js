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

module.exports = {
  Item,
  minimumQuality,
  maximumQuality,
  noSellByDate
}