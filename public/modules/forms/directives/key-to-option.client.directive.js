'use strict';

angular.module('forms').directive('keyToOption', function(){
	return {
		restrict: 'AE',
		transclude: true,
		scope: {
			field: '&'
		},
		link: function($scope, $element, $attrs, $select) {
			$element.bind('keydown keypress', function(event) {

				var keyCode = event.which || event.keyCode;
				var index = parseInt(String.fromCharCode(keyCode))-1;
				console.log($scope.field);

				if (index < $scope.field.fieldOptions.length) {
					event.preventDefault();
					$scope.$apply(function () {
						$scope.field.fieldValue = $scope.field.fieldOptions[index].option_value;
						if($attrs.type === 'dropdown'){
							$select.selected.option_value = $scope.field.fieldOptions[index].option_value;
						}
						console.log($scope);
					});
				}

			});
		}
	};
});
