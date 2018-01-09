(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider','$qProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $qProvider) {
  $qProvider.errorOnUnhandledRejections(false);

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  //Categories list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoryListController as categoryListCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });


}


})();
