angular.module("sportsStore")
.controller("sportsStoreCtrl", function($scope, $http){
	$scope.data = {
	
	//Work in progress for json 
	// $http.get("products.json")
	// .success(function(data){
	// 	$scope.data.products = data;
	// })
	// .error(function(error){
	// 	$scope.data.error = error;
	// });
	
	products: [
		{name: "Kayak", description: "A boat for one person",
			category: "Watersports", price: 275},
		{name: "Lifejacket", description: "Protective and fashionable",
			category: "Watersports", price: 48.95},
		{name: "Soccer Ball", description: "FIFA-approved size and weight",
			category: "Soccer", price: 19.50},
		{name: "Goal Posts", description: "One at each end of the field, for kicking soccer balls into.",
			category: "Soccer", price: 100}]
	};
});