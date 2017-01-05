(function(){
var app = angular.module('pokestore',['app.directives.navBar','app.directives.contentPanel','ui.router','app.controllers']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("login",{
			url:"/login",
			templateUrl: "templates/login.html",
			controller: "loginController",
			controllerAs: "loginCtrl",
		})
		.state("home",{
			url:"/home",
			templateUrl: "templates/home.html",
			controller: "homeController",
			controllerAs: "homeCtrl",
			resolve: {
				pokeList: function($http){
					return $http.get("api/allItems")
						.then(function(response){
							return response.data;
					})
				}
			}
		})
		.state("item",{
			url:"/items/:name",
			templateUrl: "templates/item.html",
			controller: "itemController",
			controllerAs: "itemCtrl",
			params: {
				data: null,
			}
		});

	$urlRouterProvider.otherwise("/home");
});


})();