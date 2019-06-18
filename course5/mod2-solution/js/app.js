(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
//    toBuy.emptyList = ShoppingListCheckOffService.checkEmptyToBuy();
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
//    alreadyBought.emptyList = ShoppingListCheckOffService.checkEmptyAlreadyBought();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    //list of items to buy
    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "berries", quantity: 5 },
      { name: "nuts", quantity: 15 },
      { name: "chips", quantity: 20 },
      { name: "cheese", quantity: 8 },
      { name: "milk", quantity: 1 }
    ];
    //List of bought items
    var boughtItems = [];
    //Move item from toBuyItems to boughtItems
    service.buyItem = function (itemIndex) {
      var newItem = {
        name: toBuyItems[itemIndex].name,
        quantity: toBuyItems[itemIndex].quantity
      };
      boughtItems.push(newItem);
      toBuyItems.splice(itemIndex,1);
    };
    service.getToBuyItems = function () {
      return toBuyItems;
    };
    // service.checkEmptyToBuy = function () {
    //   console.log(toBuyItems.length);
    //   return (toBuyItems.length == 0);
    // };
    service.getAlreadyBoughtItems = function () {
      return boughtItems;
    };
    // service.checkEmptyAlreadyBought = function () {
    //   console.log(boughtItems.length);
    //   return boughtItems.length == 0;
    // };
  };

})();
