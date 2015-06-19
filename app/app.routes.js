angular
  .module('dtcModule')
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .when('/contact', {
      templateUrl: 'app/components/contact/contactView.html',
      controller: 'ContactCtrl',
      controllerAs: 'contact'
    })
    .when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/properties', {
      templateUrl: 'app/components/properties/propertiesView.html',
      controller: 'PropertiesCtrl',
      controllerAs: 'properties'
    })
    .otherwise({
      redirectTo: 'app/components/home/homeView.html',
    });
});
