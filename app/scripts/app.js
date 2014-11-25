(function () {

  angular.module('myApp', ['ngRoute'])
    .constant('PARSE_HEADERS', {
      headers: {
        'X-Parse-Application-Id': 'ZckXCsyH38Gz4pRxv8Ch6BB6LV4J41tmnDNHhb8Q',
        'X-Parse-REST-API-Key': 'hG3QUHzbe7ZLyepP2SD66QMi5WO8uFVPEXX8vP6D',
        'Content-Type': 'application/json'
      }
    })
    .constant('PARSE_URI', 'https://api.parse.com/1/classes/StandUps/')
    .config( function ($routeProvider) {

      $routeProvider.when('/', {
        templateUrl: 'scripts/users/login.tpl.html',
        controller: 'User'
      }).when('/list', {
        templateUrl: 'scripts/standups/list.tpl.html',
        controller: 'List'
      }).otherwise({
        templateUrl: 'scripts/users/login.tpl.html',
        controller: 'User'
      })

    });

}());
