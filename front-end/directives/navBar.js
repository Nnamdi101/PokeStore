(function(){
	angular.module('app.directives.navBar',[])
	.directive('navBar',function(){
		return {
			restrict: 'E',
			templateUrl: "templates/navBar.html"
		}
	});

})();