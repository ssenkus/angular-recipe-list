'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('RecipeBuilderCtrl', function($scope, $http) {
        
    $scope.recipeItem = 0;
    
    $http({method: 'GET',
        url: document.location.href.match(/(^[^#]*)/)[0] + 'js/json/items.json'}).
        success(function(data, status, headers, config) {
        $scope.recipeItems = data;
        console.log($scope.recipeItems);
        // this callback will be called asynchronously
        // when the response is available
    }).
        error(function(data, status, headers, config) {
        alert('error fetching json!!!')
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
})
    .controller('MyCtrl2', [function() {

    }]);