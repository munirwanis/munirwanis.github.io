angular.module('Tp8', [
    'ngRoute',
    'Tp8.controllers.Home',
    'Tp8.controllers.Stations'
])

.config(function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'home.html', reloadOnSearch: false });
    $routeProvider.when('/stations', { templateUrl: 'stations.html', reloadOnSearch: false });
    $routeProvider.when('/map', { templateUrl: 'map.html', reloadOnSearch: false });
});