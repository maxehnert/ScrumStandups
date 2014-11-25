(function () {

  angular.module('myApp')
    .controller('User', ['UserFactory', '$scope',
      function (UserFactory, $scope) {

        $scope.addUser = function (user) {
          UserFactory.register(user);
        };

        $scope.login = function (user) {
          UserFactory.login(user);
        };

      }
    ]);

}());
