var app = angular.module('locationApp', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'MainController'
            })
            .when('/success', {
                templateUrl: 'views/success.html',
                controller: 'SuccessController'
            })
            .when('/failure', {
                templateUrl: 'views/fail.html',
                controller: 'FailController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'FailController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);

    app.controller('MainController', ['$scope', '$http','$location', function($scope, $http, $location){

    $scope.data = {};

    $scope.submitData = function(){
        $http.post('/', $scope.data).then(function(response){
            console.log(response);
            $location.path(response.data);
        });
    };

}]);

app.controller('SuccessController', ['$scope', '$http', function($scope, $http){


}]);

app.controller('FailController', ['$scope', '$http', function($scope, $http){

}]);
