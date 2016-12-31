(function(){
	angular.module('app.directives.contentPanel',[])
	.directive('contentPanel',function(){
		return{
			restrict: 'E',
			scope: {
				data: '=data'
			},
			templateUrl: 'templates/contentPanel.html',
			controller: function($scope){
				
			},
			controllerAs: 'panelCtrl'

		}
	});
	
})();