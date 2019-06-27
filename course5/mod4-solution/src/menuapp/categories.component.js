(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  // controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});


// CategoriesComponentController.$inject = ['$rootScope', '$element', '$q', 'MenuDataService']
// function CategoriesComponentController($rootScope, $element, $q, MenuDataService) {
//   var $ctrl = this;
//   var totalItems;
//
//   $ctrl.$onInit = function () {
//     totalItems = 0;
//   };
// };

})();
