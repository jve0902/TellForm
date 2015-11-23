'use strict';

(function() {
    // Forms Controller Spec
    describe('EditForm Directive-Controller Tests', function() {
        // Initialize global variables
        var el, scope, controller, $httpBackend;

        var sampleUser = {
            firstName: 'Full',
            lastName: 'Name',
            email: 'test@test.com',
            username: 'test@test.com',
            password: 'password',
            provider: 'local',
            roles: ['user'],
            _id: 'ed873933b1f1dea0ce12fab9',
        };

        var pdfObj = {
            fieldname:'file',
            originalname:'test.pdf',
            name:'1440112660375.pdf',
            encoding:'7bit',
            mimetype:'application/pdf',
            path:'uploads/tmp/test@test.com/1440112660375.pdf',
            extension:'pdf',
            size:56223,
            truncated:false,
            buffer:null
        };

        var sampleForm = {
            title: 'Form Title',
            admin: 'ed873933b1f1dea0ce12fab9',
            language: 'english',
            form_fields: [
                {fieldType:'textfield', title:'First Name', fieldOptions: [], fieldValue: '', required: true, disabled: false, deletePreserved: false, _id: 'ed873933b0ce121f1deafab9'},
                {fieldType:'checkbox', title:'nascar',      fieldOptions: [], fieldValue: '', required: true, disabled: false, deletePreserved: false, _id: 'ed83b0ce121f17393deafab9'},
                {fieldType:'checkbox', title:'hockey',      fieldOptions: [], fieldValue: '', required: true, disabled: false, deletePreserved: false, _id: 'ed8317393deab0ce121ffab9'}
            ],
            pdf: {},
            pdfFieldMap: {},
            startPage: {
                showStart: false,
                buttons: [],
            },
            hideFooter: false,
            isGenerated: false,
            isLive: false,
            autofillPDFs: false,
            _id: '525a8422f6d0f87f0e407a33',
        };

        // The $resource service augments the response object with methods for updating and deleting the resource.
        // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
        // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
        // When the toEqualData matcher compares two objects, it takes only object properties into
        // account and ignores methods.
        beforeEach(function() {
            jasmine.addMatchers({
                toEqualData: function(util, customEqualityTesters) {
                    return {
                        compare: function(actual, expected) {
                            return {
                                pass: angular.equals(actual, expected)
                            };
                        }
                    };
                }
            });
        });

        // Load the main application module
        beforeEach(module(ApplicationConfiguration.applicationModuleName));
        beforeEach(module('module-templates'));
        beforeEach(module('stateMock'));

        beforeEach(inject(function($compile, $controller, $rootScope, _$httpBackend_) {
            //Instantiate directive.
            var tmp_scope = $rootScope.$new();
            tmp_scope.myform = _.cloneDeep(sampleForm);

            //gotacha: Controller and link functions will execute.
            el = angular.element('<edit-form-directive myform='myform'></edit-form-directive>');
            $compile(el)(tmp_scope);
            $rootScope.$digest();

            // Point global variables to injected services
            $httpBackend = _$httpBackend_;

            //$httpBackend.whenGET(/.+\.html$/).respond('');
            $httpBackend.whenGET('/users/me/').respond('');

            //Grab controller instance
            controller = el.controller();

            //Grab scope. Depends on type of scope.
            //See angular.element documentation.
            scope = el.isolateScope() || el.scope();

        }));

        describe('> Form Field >',function(){

        	beforeEach(function(){
        		scope.myform = _.cloneDeep(sampleForm);
        	});

	        it('$scope.addNewField() should ADD a new field to $scope.myform.form_fields', function() {

	        	//Run controller methods
	            scope.addNewField(true, 'textfield');

	            var expectedFormField = {
	            	title:'Short Text2', 
	                fieldType:'textfield', 
	                fieldValue: '', 
	                required: true, 
	                disabled: false, 
	                deletePreserved: false
	            };

	            var actualFormField = _.cloneDeep(_.last(scope.myform.form_fields));
	            delete actualFormField._id;

	            expect(scope.myform.form_fields.length).toEqual(sampleForm.form_fields.length+1);
	            expect(actualFormField).toEqualData(expectedFormField);
	        });

	        it('$scope.deleteField() should DELETE a field to $scope.myform.form_fields', function() {
	            
	        	//Run controller methods
	            scope.deleteField(0);

	            expect(scope.myform.form_fields.length).toEqual(sampleForm.form_fields.length-1);
	            expect(_.first(scope.myform.form_fields)).toEqualData(sampleForm.form_fields[1]);
	        });

	        it('$scope.duplicateField() should DUPLICATE a field and update $scope.myform.form_fields', function() {
	            
	        	//Run controller methods
	            scope.duplicateField(0);

	            var originalField = _.cloneDeep(scope.myform.form_fields[0]);
	            originalField.title += ' copy';

	            delete originalField._id;
	            var copyField = _.cloneDeep(scope.myform.form_fields[1]);
	            delete copyField._id;

	            expect(scope.myform.form_fields.length).toEqual(sampleForm.form_fields.length+1);
	            expect(originalField).toEqualData(copyField);
	        });

		});

		describe('> Form Field Button >',function(){

	        it('$scope.addButton() should ADD a button to $scope.myform.startPage.buttons', function() {
	           
	            var expectedStartPageBtn = {
	            	bgColor:'#ddd', 
	                color:'#ffffff', 
	                text: 'Button'
	            };

	        	//Run controller methods
	            scope.addButton();
	            var actualStartPageBtn = _.cloneDeep(_.last(scope.myform.startPage.buttons));
	            delete actualStartPageBtn._id;

	            expect(scope.myform.startPage.buttons.length).toEqual(sampleForm.startPage.buttons.length+1);
	            expect(actualStartPageBtn).toEqualData(expectedStartPageBtn);
	        });

	        it('$scope.deleteButton() should DELETE a button from $scope.myform.startPage.buttons', function() {
	        	//Run controller methods
	            scope.deleteButton(scope.myform.startPage.buttons[0]);
	            
	            expect(scope.myform.startPage.buttons.length).toEqual(0);
	        });
	    });

        describe('> Form Field Option >',function(){
	        it('$scope.addOption() should ADD a new option to a field.fieldOptions', function() {
	        	var originalOptionLen = scope.myform.form_fields[1].fieldOptions.length;

	        	//Run controller methods
	            scope.addOption(1);

	            expect(originalOptionLen+1).toEqual(scope.myform.form_fields[1].fieldOptions.length);
	            expect(scope.myform.form_fields[1].fieldOptions[0].option_title).toEqualData('Option 0');
                expect(scope.myform.form_fields[1].fieldOptions[0].option_value).toEqualData('Option 0');
	        });

	        it('$scope.deleteOption() should DELETE remove option from field.fieldOptions', function() {
                //Run controller methods
                scope.deleteOption(1, scope.myform.form_fields[1].fieldOptions[0]);

	            expect(scope.myform.form_fields[0].fieldOptions.length).toEqual(0);
	            expect(scope.myform.form_fields[0].fieldOptions[0]).not.toBeDefined();
	        });
	    });
    });
}());