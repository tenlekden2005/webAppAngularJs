//controllers
angularWebApp.controller("homeController", ["$scope", function($scope){
	
	
}]);

angularWebApp.controller("contactController", ["$scope", function($scope){
	
	
}]);

angularWebApp.controller("navigationBarController",["navigationBarService", "$scope", function(navigationBarService, $scope){
	$scope.menu = navigationBarService.linkData;
	
}]);

angularWebApp.controller("jubmotronController",["jumbotronService", "$scope", function(jumbotronService, $scope){
	$scope.jumbotronHeader = jumbotronService.header;
	$scope.jumbotronContent = jumbotronService.content;
	
}]);

angularWebApp.controller("carouselController", ["carouselService", "$scope", function(carouselService, $scope){
	$scope.imagesData = carouselService.images;
	
}]);

angularWebApp.controller("formController", ["$scope","professionService", "formService", "countryService", function($scope, professionService, formService, countryService){
	$scope.profession = professionService.profession;
	console.log($scope.profession.toString());

	$scope.firstName = "Tenzin";
	$scope.lastName = "Lekden";
	$scope.selectedCountry = "India";
	$scope.Street = "BTM";
	$scope.City = "Bangalore";
	// $scope.Skills = 
	$scope.email = "tenlekdan2005@yahoo.co.in";
	$scope.gender = "Male";
	$scope.phone = 8892430131;
	$scope.comments = "of all the wonders that i have yet seen it seems to be most strange that man should fear";

	$scope.country = countryService.country;
	$scope.generateJson = function(){
		var jsonData = {
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			Country: $scope.selectedCountry,
			Street: $scope.Street,
			City: $scope.City,
			Skills: selection,
			email: $scope.email,
			gender: $scope.gender,
			telephone: $scope.telephone,
			comments: $scope.comments
		};
		

		alert(JSON.stringify(jsonData));
	}

	var selection = ['Lead Guitarist'];
		$scope.selectP = function(p){
			
			if(selection.indexOf(p) == -1){
				selection.push(p);
			}
			else{
				selection.splice(selection.indexOf(p), 1);
			}
			
			console.log(selection.toString())

		}

		$scope.isSelected = function(p){

			if(selection.indexOf(p)==-1){
				return false;
			}
			else{
				return true;
			}
		}

}]);