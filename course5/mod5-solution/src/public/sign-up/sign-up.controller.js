(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.submit = function () {
    MenuService.getMenuItem(signUpCtrl.menuNumber).then(function (result) {
      var userInfo = {
        firstName : signUpCtrl.firstName,
        lastName : signUpCtrl.lastName,
        emailAddress : signUpCtrl.emailAddress,
        phoneNumber : signUpCtrl.phoneNumber,
        menuNumber : signUpCtrl.menuNumber
      };
      MenuService.setUserInfo(userInfo);
      signUpCtrl.menuNumberNotExists = false;
      signUpCtrl.userInfoSaved = true;
    }, function (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      signUpCtrl.menuNumberNotExists = true;
      signUpCtrl.userInfoSaved = false;

    });
  };
}

})();
