(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  // controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});


// ItemsComponentController.$inject = ['$rootScope', '$element', '$q', 'MenuDataService']
// function ItemsComponentController($rootScope, $element, $q, MenuDataService) {
//   var $ctrl = this;
//   var totalItems;
//
//   $ctrl.$onInit = function () {
//     totalItems = 0;
//   };
// };

})();
