'use strict';

// Setting up route
angular.module('forms').config(['$stateProvider',
	
	function($stateProvider) {
		// Forms state routing
		$stateProvider.
		state('listForms', {
			url: '/forms',
			templateUrl: 'modules/forms/views/list-forms.client.view.html',
			data: {
				permissions: [ 'editForm' ]
			}
  		}).
  		state('submitForm', {
			url: '/forms/:formId',
			templateUrl: 'modules/forms/views/submit-form.client.view.html',
			data: {
				hideNav: true,
			},
			resolve: {
				Forms: 'Forms',
		        myForm: function (Forms, $stateParams) {
		            return Forms.get({formId: $stateParams.formId}).$promise;
		        },
			},
			controller: 'SubmitFormController'
		}).state('viewForm', {
			url: '/forms/:formId/admin',
			templateUrl: 'modules/forms/views/admin-form.client.view.html',
			data: {
				permissions: [ 'editForm' ]
			},
			resolve: {
				Forms: 'Forms',
		        myForm: function (Forms, $stateParams) {
		            return Forms.get({formId: $stateParams.formId}).$promise;
		        },
			},
			controller: 'AdminFormController'
		}).state('viewForm.configure', {
			url: '/configure',
			templateUrl: 'modules/forms/views/adminTabs/configure.html'
	    }).state('viewForm.design', {
			url: '/design',
			templateUrl: 'modules/forms/views/adminTabs/design.html'
	    }).state('viewForm.analyze', {
			url: '/analyze',
			templateUrl: 'modules/forms/views/adminTabs/analyze.html'
	    }).state('viewForm.create', {
			url: '/create',
			templateUrl: 'modules/forms/views/adminTabs/create.html'
	    });
	}
]);