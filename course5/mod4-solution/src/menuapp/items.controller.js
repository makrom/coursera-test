(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['itemsList']
function ItemsController(itemsList) {
  var items = this;
  items.itemsList=itemsList;
}

})();
