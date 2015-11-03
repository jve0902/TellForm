'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        responseError: function(response) {
          // console.log($location.path());
          if( $location.path() !== '/users/me' && $location.path() !== '/forms' && response.config){
            if(response.config.url !== '/users/me' && response.config.url !== '/forms'){
              console.log('intercepted rejection of ', response.config.url, response.status);
              if (response.status === 401) {
                // save the current location so that login can redirect back
                $location.nextAfterLogin = $location.path();
                $location.path('/signin');
              }else if(response.status === 403){
                $location.path('/access_denied');
              }
            }

          }
          return $q.reject(response);
        }
      };
    });
}]);