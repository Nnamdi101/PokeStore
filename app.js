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
					return $http.get("includes/getAllitems.php")
						.then(function(response){
							return response.data;
					})
				}
			}
		})
		.state("item",{
			url:"/items/:iid/:name",
			templateUrl: "templates/item.html",
			controller: "itemController",
			controllerAs: "itemCtrl",
			resolve: {
				Poke: function($http,$stateParams){
					return $http({
						url: "includes/getItemReviews.php",
						method: "GET",
						params: {iid: $stateParams.iid}

					})
					.then(function(response){
							return response.data;
					},
					function(error){
						return null;
					})
				}
			}

		});

	$urlRouterProvider.otherwise("/home");
});


})();