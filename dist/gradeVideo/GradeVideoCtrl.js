/**
 * Created by tituswoo on 10/31/14.
 */

angular.module('swapr').controller('GradeVideoCtrl', ['$scope', 'localStorageService', 'AssignmentDB',
    function ($scope, localStorageService, AssignmentDB) {
    var original = {};

    (function () {
        var peerReview = localStorageService.get('peerReview');
        if (peerReview) {
            $scope.peerReview = peerReview;
        } else {
            // this will be loaded from the server eventually.
            $scope.peerReview = {
                video: {
                    url: "https://www.youtube.com/watch?v=dl-eEpoePwo",
                    title: "Lab 1 Review"
                },
                criteria: [
                    {
                        title: 'Organizational Structure',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: ''
                    },
                    {
                        title: 'Content Models',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: ''
                    },
                    {
                        title: 'Content Prediction Discussion',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: ''
                    },
                    {
                        title: 'Content Overall',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: ''
                    },
                    {
                        title: 'Production Delivery',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: ''
                    }
                ]
            };
        }
        original = angular.copy($scope.peerReview);
    })();

    $scope.save = function () {
        localStorageService.set('peerReview', $scope.peerReview);
    };

    $scope.reset = function () {
        angular.copy(original, $scope.peerReview);
    };
    $scope.submit = function() {
        AssignmentDB.upload();
    }
}]);
