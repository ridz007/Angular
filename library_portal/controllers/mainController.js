(function() {

    angular.module('libraryManagementPortal', [])
.controller('formController', formController);

formController.$inject = ['$scope', '$http', '$window'];

function formController($scope, $http, $window) {
	$scope.checkCredentials = function (username, password) {
	
	if ((username === undefined) || (password === undefined)) {
	    $window.alert('please enter your credentails');
	} else  {
	    $window.alert('Kuch chal raha hai!!');
	//HOW TO USE HTTP SERVICE FROM LOCAL JSON
	    $http({ method: 'GET', url: 'file:///D:/Ritu/AngularJS-portal/library_portal/json/userList.json' }).success(function (data) {
	
	 for (var i in data.users) {
	 if ((data.users[i].username == username) && (data.users[i].password == password)){
		
	     $window.alert("Welcome " + username + "!!");
			return 0;
		} else {
	     $window.alert('nopes');
		}
	}
	//window.alert(data.users.length);	
	});
	}
	}
}

})();
