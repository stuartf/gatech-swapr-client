angular.module('swapr.student').service('AssignmentDB', ['$stateParams', function ($stateParams) {
    var todo = [
        {
            title: 'Lab 1 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'video',
            route: 'assignments.upload',
            id: $stateParams.id
        },
        {
            title: 'Lab 1 Peer Review',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'review',
            route: 'assignments.gradeVideo',
            id: $stateParams.id
        },
        {
            title: 'Lab 2 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'video',
            route: 'assignments.upload',
            id: $stateParams.id
        }
    ]
    var completed = []
    var current = []

    this.upload = function() {
        if (current.length !== 0) {
            var index = current[current.length - 1]; 
            var removed = todo.splice(index,1);
            completed.push(removed[0]);
            console.log("Uploaded!")
        } else {
            console.log("Not uploaded")
        }  
    }
    this.enqueue = function(assignment) {
        var index = todo.indexOf(assignment)
        current.push(index)
    }
    this.clearQueue = function() {
        current = []
    }
    this.getTodo = function() {return todo}
    this.getCompleted = function() {return completed}
}]);