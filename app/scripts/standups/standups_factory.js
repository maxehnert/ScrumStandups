(function () {

    angular.module('myApp')
      .factory('StandUpsFactory', ['PARSE_URI', 'PARSE_HEADERS', '$http', '$rootScope',
        function (PARSE_URI, PARSE_HEADERS, $http, $rootScope) {

          var getStandUp = function () {
            return $http.get(PARSE_URI + 'classes/StandUp', PARSE_HEADERS);
          };

          var addStandUp = function (standUp) {
            $http.post(PARSE_URI + 'classes/StandUp', standUp, PARSE_HEADERS)
              .success( function (data) {
                $rootScope.$broadcast('standup:added', { objectId: data.objectId, standup: standUp });
              }
            );
          };

          var standUpByUser = function (user) {
            var query = '?'+'where={"student":"'+user+'"}';
            return $http.get(PARSE_URI + 'classes/StandUp' + query, PARSE_HEADERS);
          };

          return {
            addStandUp: addStandUp,
            getStandUp: getStandUp,
            standUpByUser: standUpByUser
          }

        }
      ]);

}());


