(function () {

  angular.module('myApp')
    .controller('List', ['$scope', 'UserFactory', 'StudentFactory',
      function ($scope, UserFactory, StudentFactory) {

        StudentFactory.getStudents().success( function (data) {
          $scope.students = data.results;
        });

        $scope.addStudent = function (student) {
          StudentFactory.addStudent(student);
        };

      }
    ]);
}());


