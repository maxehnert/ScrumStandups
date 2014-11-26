(function () {

  angular.module('myApp')
    .factory('StudentFactory', ['$http', 'PARSE_HEADERS', 'PARSE_URI',
      function ($http, PARSE_HEADERS, PARSE_URI) {

        var getStudents = function () {
          return $http.get(PARSE_URI + 'classes/Student', PARSE_HEADERS);
        };

        var addStudent = function (student) {
          $http.post(PARSE_URI + 'classes/Student', student, PARSE_HEADERS)
            .success( function () {
              $('#add-student-form')[0].reset();
            }
          );
        };

        return {
          getStudents: getStudents,
          addStudent: addStudent
        }

      }
    ]);

}());
