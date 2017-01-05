(function(){
	var app = angular.module('app.controllers',[]);
	
	app.controller('storeController',function(){
	
	});

	app.controller('loginController', function($scope, $http, $state){
		var vm = this;

		vm.signUpInfo = {
			username: undefined,
			password: undefined
		};

		vm.loginInfo = {
			email: undefined,
			password: undefined
		};

		// $scope.login = function (){
		// 	 console.log(vm.loginInfo.username);
		// 	 console.log(vm.loginInfo.password);
		// 	console.log("hello");

		// };

		vm.login = function(){
			var data = {
				email: vm.loginInfo.email,
				password: vm.loginInfo.password
			};

			$http.post("includes/signUp.php", data)
			.success(function(response){
				console.log(response);
				localStorage.setItem("user", JSON.stringify({user: response[0].uid}));

				//hide modal
				$('#signin').modal('hide');

				$state.go("home");
			})
			.error(function(error){
				console.log(error);
			});
		};


	});

	app.controller('homeController',function(pokeList){
		this.items = pokeList;
	});
	app.controller('itemController',function(/*Poke,*/$stateParams,$http){

		var vm = this;
		vm.data=$stateParams.data;


	});
})()