angular.module('Data')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "categories.json")
    }).then(function (result) {
        return result.data;
    });
  };
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "menu_items.json?category=" + categoryShortName)
    }).then(function (result) {
        console.log(result.data.menu_items);
        return result.data;
    });
  };
};
