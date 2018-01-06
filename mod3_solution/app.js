(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        myTitle: '@title',
        foundList: '<',
        //badRemove: '=',
        //onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }


  function FoundItemsDirectiveController() {
    var list = this;

/*
    list.cookiesInList = function () {
      for (var i = 0; i < list.items.length; i++) {
        var name = list.items[i].name;
        if (name.toLowerCase().indexOf("cookie") !== -1) {
          return true;
        }
      }

      return false;
    };*/
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService)
  {
    var ctrl = this;

    ctrl.searchMenu = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        ctrl.found = response;
      })
      .catch(function (error) {
        console.log("Something went wrong. Please try again later!");
      });
    };
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          //console.log(result.data);

          // process result and only keep items that match
          var items = result.data.menu_items;

          var foundItems = [];
          var searchTermLower = searchTerm.toLowerCase();

          for (var i = 0; i < items.length; i++) {
            var desc = items[i].description;
            if (desc.toLowerCase().indexOf(searchTermLower) > -1 ) {
              var item = {
                name: items[i].name,
                shortName: items[i].shortName,
                description: desc
              };

              foundItems.push(item);
            }
          }

          // return processed items
          return foundItems;
      });
    };

  }


})();
