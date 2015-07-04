'use strict';

angular.module('forms').directive('fieldIconDirective', function($http, $compile) {
    
    return {
        templateUrl: './modules/forms/views/directiveViews/form/fieldIcon.html',
        restrict: 'E',
        scope: {
            typeName: '@'
        },
        controller: function($scope){
        	var iconTypeMap = {
				"textfield": "fa fa-pencil-square-o",
				"dropdown": "fa fa-th-list",
				"date": "fa fa-calendar",
				"checkbox": "fa fa-check-square-o",
				"radio": "fa fa-dot-circle-o",
				"email": "fa fa-envelope-o",
				"textarea": "fa fa-pencil-square",
				"legal": "fa fa-legal",
				"file": "fa fa-cloud-upload",
				"rating": "fa fa-star-half-o",
				"link": "fa fa-link",
				"scale": "fa fa-sliders",
				"stripe": "fa fa-credit-card",
			}
			$scope.typeIcon = iconTypeMap[$scope.typeName];
        },

    };
});