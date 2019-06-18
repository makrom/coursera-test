(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    // console.log(ddo);
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
    console.log(list);
    // list.cookiesInList = function () {
    //   for (var i = 0; i < list.items.length; i++) {
    //     var name = list.items[i].name;
    //     if (name.toLowerCase().indexOf("cookie") !== -1) {
    //       return true;
    //     }
    //   }
    //
    //   return false;
    // };
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.found = [];
    list.searchItems = function (searchTerm) {
      console.log(searchTerm);
      list.found = MenuSearchService.getMatchedMenuItems(searchTerm);
      console.log(list.found)
    };
    list.removeItem = function (itemIndex) {
      list.found.splice(itemIndex, 1);
    };
    // console.log(list)
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      // console.log(ApiBasePath + "menu_items.json");
      return $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json")
      }).then(function (result) {
          // process result and only keep items that match
          var foundItems = [];
          var searchTermLower = searchTerm.toLowerCase();
          // console.log(result.data.menu_items);
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTermLower)!==-1) {
              foundItems.push(result.data.menu_items[i]);
            }
          };
          // console.log(foundItems);
          // return processed items
          return foundItems;
      });
    };
  }
})();
