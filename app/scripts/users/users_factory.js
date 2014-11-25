(function () {

  angular.module('myApp')
    .factory('UserFactory', ['PARSE_HEADERS', 'PARSE_URI', '$http',
      function (PARSE_HEADERS, PARSE_URI, $http) {

        var register = function (user) {
          $http.post('https://api.parse.com/1/users', user, PARSE_HEADERS).success( function (data) {
            console.log(data);
          });
        };

        var login = function (user) {
          var params = 'username='+user.username+'&password='+user.password;
          $http.get('https://api.parse.com/1/login/?'+params, PARSE_HEADERS)
            .success( function (data) {
              console.log(data);
          });
        };

        return {
          login:    login,
          register: register
        }

      }
  ]);

}());
