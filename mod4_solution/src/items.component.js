(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/templates/menuItems.template.html',
  bindings: {
    menuItems: '<',
    categoryShortName: '<'
  }
});


})();
