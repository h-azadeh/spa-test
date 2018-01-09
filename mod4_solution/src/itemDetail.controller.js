(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService', 'categoryItems', '$stateParams'];
function ItemDetailController(MenuDataService, categoryItems, $stateParams) {
  var ctrl = this;
  ctrl.menuItems = categoryItems;
  ctrl.categoryShortName = $stateParams.shortName;
}

})();
