//routing
angularWebApp.config(function ($routeProvider){
	$routeProvider

	.when("/", {
		templateUrl: "pages/home.htm",
		controller: "homeController"
	})
	.when("/CONTACT", {
		templateUrl:"pages/contact.htm",
		controller: "contactController"
	})
	.when("/HOME", {
		templateUrl: "pages/home.htm",
		controller: "homeController"
	})
	.when("/MD6", {
		templateUrl: "pages/home.htm",
		controller: "homeController"
	})
	.when("/ABOUT MANUEL", {
		templateUrl: "pages/home.htm",
		controller: "homeController"
	})
	.when("/HISTORY", {
		templateUrl: "pages/home.htm",
		controller: "homeController"
	})

});