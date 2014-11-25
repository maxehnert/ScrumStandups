(function () {

  angular.module('myApp')
    .factory('UserFactory', ['PARSE_HEADERS', 'PARSE_URI', '$http', '$cookieStore',
      function (PARSE_HEADERS, PARSE_URI, $http, $cookieStore) {

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
              $cookieStore.put('currentUser', data);
          });
        };

        var ioUser = function (user) {
          var user = $cookieStore.get('currentUser');
          console.log(user);
        };

        return {
          login:    login,
          register: register,
          checkUser: ioUser
        }

      }
  ]);

}());
