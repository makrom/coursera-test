(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
    .directive('foundItems', FoundItemsDirective);

  // FoundItemsDirective.$inject = [];
  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'list',
      bindToController: true
    };
    // console.log(ddo);
    return ddo;
  }

  function FoundItemsController() {
    var list = this;
    console.log(list);
    // list.cookiesInList = function () {
    //   for (var i = 0; i < list.items.length; i++) {
    //     var name = list.items[i].name;
    //     if (name.toLowerCase().indexOf("cookie") !== -1) {
          return true;
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
      list.found = [];
      console.log(searchTerm);
      if (!(searchTerm === undefined) && !(searchTerm === '')) {
        MenuSearchService.getMatchedMenuItems(searchTerm)
        .then(function (response) {
          list.found = response;
        });
      }
      // console.log(list.found)
    };
    list.removeItem = function (itemIndex) {
      list.found.splice(itemIndex, 1);
    };
    // console.log(list.found.length)
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
            var menuItem = result.data.menu_items[i];
            if (menuItem.description.toLowerCase().indexOf(searchTermLower)!==-1) {
              foundItems.push(menuItem);
              // console.log(menuItem);
            }
          };
          // console.log(foundItems);
          // return processed items
          return foundItems;
      });
    };
  }
})();
