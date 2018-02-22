/**
 * Created by Vaughan on 10/24/2014.
 */
/*angular.module('swapr.student')

.service("assignment", function assign(){
    var assignment = this;
    var current = null;

})

.controller('AssignmentsCtrl', ['$scope', '$stateParams', 'AssignmentDB', function ($scope, $stateParams, AssignmentDB) {
    console.log("new controller")
    AssignmentDB.clearQueue()
    $scope.todo = AssignmentDB.getTodo()
    $scope.completed = AssignmentDB.getCompleted()

    $scope.enqueue = function(assignment) {
        AssignmentDB.enqueue(assignment)
    }
   
}]);*/
angular.module('swapr').controller('AssignmentsCtrl', ['$scope', 'Assignments', function($scope, Assignments) {
    Assignments.getActiveAssignments().success(function(data, status) {
        $scope.todo = data;
    });
}]);
