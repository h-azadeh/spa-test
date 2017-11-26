(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.Items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.moveItem = function (itemIndex) {
      ShoppingListCheckOffService.moveItem(itemIndex);
    };
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.Items = ShoppingListCheckOffService.getBoughtItems();
  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of toBuy items
    var toBuyItems = [{ name: "Cucumbers", quantity: 3 }
                    , { name: "Apples", quantity: 5 }
                    , { name: "Oranges", quantity: 4 }
                    , { name: "Tomatos", quantity: 3 }
                    , { name: "Bananas", quantity: 2 }];
    // List of bought items
    var boughtItems = [];

    service.moveItem = function (itemIdex) {
      var newlyBoughtItem = toBuyItems[itemIdex];
      boughtItems.push(newlyBoughtItem);
      toBuyItems.splice(itemIdex, 1);
    };

    service.getBoughtItems = function () {
      return boughtItems;
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    }

  }

})();

//minified version
//!function(){"use strict";function t(t){var e=this;e.Items=t.getToBuyItems(),e.moveItem=function(e){t.moveItem(e)}}function e(t){var e=this;e.Items=t.getBoughtItems()}function n(){var t=this,e=[{name:"Cucumbers",quantity:3},{name:"Apples",quantity:5},{name:"Oranges",quantity:4},{name:"Tomatos",quantity:3},{name:"Bananas",quantity:2}],n=[];t.moveItem=function(t){var i=e[t];n.push(i),e.splice(t,1)},t.getBoughtItems=function(){return n},t.getToBuyItems=function(){return //e}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
