'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buildRecipe', {templateUrl: 'partials/recipeBuilderTable.html', controller: 'RecipeBuilderCtrl'});
  $routeProvider.when('/helpContent', {templateUrl: 'partials/helpContent.html', controller: ''});
  $routeProvider.when('/browseRecipes', {templateUrl: 'partials/browseRecipes.html', controller: ''});
  $routeProvider.when('/calculateRecipe', {templateUrl: 'partials/calculateRecipe.html', controller: ''});
  $routeProvider.when('/browseByCategory', {templateUrl: 'partials/browseByCategory.html', controller: 'browseByCategoryCtrl'});
  $routeProvider.otherwise({redirectTo: '/buildRecipe'});
}]);
