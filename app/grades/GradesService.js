angular.module('swapr').factory('Grades', ['$http', 'CONSTANTS', function ($http, CONSTANTS) {
    var getGrades = function () {
        //return $http.get(CONSTANTS.BASE_URL + 'grades');
        return $http.get(CONSTANTS.DEV_URL + 'grades');
    };

    var getGrade = function(id) {
        return $http.get(CONSTANTS.BASE_URL + 'grades/' + id);
    };

    return {
        getGrades: getGrades,
        getGrade: getGrade
    };
}]);
