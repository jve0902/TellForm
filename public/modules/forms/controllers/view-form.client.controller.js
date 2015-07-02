'use strict';

// Forms controller
angular.module('forms').controller('ViewFormController', ['$scope', '$stateParams', '$state', 'Forms', 'CurrentForm','$http',
	function($scope, $stateParams, $state, Forms, CurrentForm, $http) {

            // view form submissions
            $scope.viewSubmissions = false;

            //show submissions of Form
            $scope.showSubmissions = function(){
            	$scope.viewSubmissions = true;
            }
            //hide submissions of Form
            $scope.hideSubmissions = function(){
            	$scope.viewSubmissions = false;
            }

			// Return all user's Forms
			$scope.findAll = function() {
				$scope.forms = Forms.query();
			};

			// Find a specific Form
			$scope.findOne = function() {
				$scope.form = Forms.get({
					formId: $stateParams.formId
				});
				CurrentForm.setForm($scope.form);
			};

            // Remove existing Form
            $scope.remove = function() {
                if (CurrentForm.getForm()) {
                	var form = CurrentForm.getForm();
                    form.$remove();

                    $http.delete('/forms/'+$scope.form._id).
                    	success(function(data, status, headers){
                        console.log('form deleted successfully');
                        alert('Form deleted..');
                        $state.go('listForms');
                    });

                } else{
                    $scope.form.$remove(function() {
	                    $http.delete('/forms/'+$scope.form._id).
	                    	success(function(data, status, headers){
	                        console.log('form deleted successfully');
	                        alert('Form deleted..');
	                        $state.go('listForms');
	                    });
                    });
                }
            };

            
		// });
	}
]);