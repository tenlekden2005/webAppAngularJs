// directives
angularWebApp.directive("navigationBar", function(){
	return {
		restrict: "E",
		templateUrl: "directives/navigationBar.htm",
		replace: true,
		scope: {
			myMenu: "=",
		}
	}
})


angularWebApp.directive("jumbotron", function(){
	return {
		restrict: "E",
		templateUrl: "directives/jumbotron.htm",
		replace: true,
		scope: {
			myHeader: "@",
			myContent: "@"
		}
	}
});

angularWebApp.directive("carousel", function(){
	return {
		restrict:"E",
		replace:true,
		templateUrl:"directives/carousel.htm",
		scope:{
			myImages: "="
		}
	}
});
