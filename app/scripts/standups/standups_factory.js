(function () {

    angular.module('myApp')
      .factory('StandUpsFactory', ['PARSE_URI', 'PARSE_HEADERS',
        function (PARSE_URI, PARSE_HEADERS) {

          var getStandUp = function () {
            return $http.get(PARSE_URI + 'classes/StandUp', PARSE_HEADERS);
          };

          var addStandUp = function (standUp) {
            $http.post(PARSE_URI + 'classes/StandUp', standUp, PARSE_HEADERS)
              .success( function (data) {
                console.log(data);
              });
          };

          return {
            addStandup: addStandUp,
            getStandUp: getStandUp
          }

        }
      ]);

}());
