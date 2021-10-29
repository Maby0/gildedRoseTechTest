# Gilded Rose Tech Test

This tech test involved refactoring some legacy code, increasing readability and ease of implementation of an existing application. This tech test was undertaken using JavaScript. Test spec and approach can be found below.

### To run

* Clone this repository `git clone https://github.com/Maby0/bankTechTest/`
* Install dependancies `npm install`
* Open the node REPL in your terminal while in the project's root directory and paste in the following line `const { Shop, NormalItem, AgedBrie, Sulfuras, BackstagePass, ConjuredItem } = require('./src/gildedRose');`
* Create the items the shop will sell:
  * `let normalItem1 = new NormalItem("Bread", 5, 5);`
  * `let normalItem2 = new NormalItem("Milk", 2, 10);`
  * `let agedBrie = new AgedBrie("Aged Brie", 5, 10);`
  * `let sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 5, 55);`
  * `let backstagePass = new BackstagePass("Backstage Pass", 12, 25);`
  * `let conjuredItem = new ConjuredItem("Mana Biscuit", 5, 10);`
* Create the shop instance and pass it the items you created:
  * `const gildedRose = new Shop([normalItem1, normalItem2, agedBrie, sulfuras, backstagePass, conjuredItem]);`
* Call the items property on the shop instance(gildedRose) to ensure everything is stocked correctly:
  * `gildedRose.items`
* Call the `updateQuality()` method on the shop instance (gildedRose) once the day is up:
  * `gildedRose.updateQuality();`

![Items](/images/gildedRoseItems.png)

![First Quality Update](/images/updateQuality1.png)

![Second Quality Update](/images/updateQuality2.png)

### Testing

* This app was refactored using a TDD approach employing the Jasmine testing suite.
* 23 tests were written in total to ensure the desired output was generated from each class and subclass.
* To run the tests, ensure you have jasmine-node installed by running `npm i jasmine-node` (requires node) and run `jasmine-node .` in your terminal from the project's root directory.

![Testing suite](/images/testingSuite.png)

### Spec

This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes", like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the `UpdateQuality` method and Items property static if you like, we’ll cover for you)."*

#### The brief:

Choose [legacy code](https://github.com/emilybache/GildedRose-Refactoring-Kata) (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

### Approach

* As the spec restricts us from altering the Item class, I decided to approach this test by utilising class inheritance to give each Item subclass its own `.updateItemQuality()` method. 
* By doing this, it would allow the same method to be called for each item type in the Shop's items array from the same code line (seen in gildedRose.js).
* I have the same 2 private methods that exist in every subclass that simultaneously deal with correcting the quality update functionality and with user input edge-cases i.e. ensuring quality adheres to the boundaries specified in the spec.
  * In an ideal world, these 2 private methods would exist in the parent class (Item), but due to the aforementioned restrictions, I believe they had to be duplicated across each subclass.
* I left adding the ConjuredItem subclass until I'd fully restructured the code and knew that it maintained original functionality and was working as intended. This allowed me to test first-hand how the process of adding item types to the application would go. I was satisfied with the resulting process and believe that it it an  improvement over the legacy code.