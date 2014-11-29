(function () {

  angular.module('myApp')
    .controller('List', ['$scope', 'UserFactory', 'StudentFactory', 'StandUpsFactory', '$rootScope',
      function ($scope, UserFactory, StudentFactory, StandUpsFactory, $rootScope) {

        $scope.students = [];
        $scope.studentStandups = [];

        $scope.$watch('cStudent', function (newVal) {
          if (newVal) {
            $('#csID').val(newVal.objectId).trigger('input');

            StandUpsFactory.standUpByUser(newVal.objectId).success( function (data) {
              $scope.studentStandups = data.results;
            });

          }
        });

        $rootScope.$on('standup:added', function (event, args) {
          // Add new standup to page
          var su = {
            currently: args.standup.currently,
            roadblock: args.standup.roadblock,
            objectId: args.objectId
          }
          $scope.studentStandups.push(su);
          // Clear the form & Close the Modal
          $('a.close-reveal-modal').trigger('click');
          $('#add-student-form')[0].reset();
        });

        StudentFactory.getStudents().success( function (data) {
          $scope.students = data.results;
        });

        $scope.addStudent = function (student) {
          StudentFactory.addStudent(student);
        };

        $scope.addStandup = function (standup) {
          StandUpsFactory.addStandUp(standup);
        };

      }
    ]);
}());


