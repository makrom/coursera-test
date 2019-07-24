(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.userInfo = MenuService.userInfo;
  myInfoCtrl.basePath = ApiPath;
  console.log('ctrl'+myInfoCtrl.userInfo);
}

})();
