(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  //method that returns all categories
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
        var categories = result.data;

        var categoryList = [];

        for (var i = 0; i < categories.length; i++) {
            var category = {
              id: categories[i].id,
              name: categories[i].name,
              shortName: categories[i].short_name,
              specialInstructions: categories[i].special_instructions

            };

            categoryList.push(category);
        }

        return categoryList;
    }).catch(function (error) {
      console.log("Something went wrong. Please try again later!");
    });
  };

  //method that returns all items in the given category
  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {
        var items = result.data.menu_items;
        var itemsList = [];

        for (var i = 0; i < items.length; i++) {
            var item = {
              name: items[i].name,
              shortName: items[i].short_name,
              description: items[i].description
            };

            categoryList.push(item);
        }

        return itemsList;
    }).catch(function (error) {
      console.log("Something went wrong. Please try again later!");
    });

  };


}


})();
