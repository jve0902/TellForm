(function () {
	'use strict';

	// Create the Socket.io wrapper service
	angular
		.module('view-form')
		.factory('Socket', Socket);

	Socket.$inject = ['$timeout', '$window'];

	function Socket($timeout, $window) {
		

		// Connect to Socket.io server
		function connect(url) {
			service.socket = io(url, {'transports': ['websocket', 'polling']});
		}

		// Wrap the Socket.io 'emit' method
		function emit(eventName, data) {
			if (service.socket) {
				service.socket.emit(eventName, data);
			}
		}

		// Wrap the Socket.io 'on' method
		function on(eventName, callback) {
			if (service.socket) {
				service.socket.on(eventName, function (data) {
					$timeout(function () {
						callback(data);
					});
				});
			}
		}

		// Wrap the Socket.io 'removeListener' method
		function removeListener(eventName) {
			if (service.socket) {
				service.socket.removeListener(eventName);
			}
		}
		
		var service = {
			connect: connect,
			emit: emit,
			on: on,
			removeListener: removeListener,
			socket: null
		};

		var url = '';
		console.log("$window.socketPort: "+$window.socketPort);
		console.log("$window.socketUrl: "+$window.socketUrl);
		if($window.socketUrl && $window.socketPort){
			url = window.location.protocol + '//' + $window.socketUrl + ':' + $window.socketPort;
		} else if ($window.socketUrl && !$window.socketPort){
			url = window.location.protocol + '//' + $window.socketUrl;
		} else if ($window.socketPort){
			url = window.location.protocol + '//' + window.location.hostname + ':' + $window.socketPort;
		} else {
			url = window.location.protocol + '//' + window.location.hostname;
		}
		connect(url);

		return service;
	}
}());
