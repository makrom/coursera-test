(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myInfoCtrl = this;
  myInfoCtrl.userInfo = MenuService.userInfo;
  console.log('ctrl'+myInfoCtrl.userInfo);
  // if (MenuService.userInfo === undefined) {
  //   myInfoCtrl.notSignedUpYet = true;
  // } else {
  //   myInfoCtrl.notSignedUpYet = false;
  // }
}

})();
