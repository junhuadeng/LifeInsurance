var app = angular.module('caculator', []);

app.controller('myCalculator', function ($scope, Calculator) { 
    $scope.values = {
        monthlyAmount: 0,
        noOfChild: 0,
		debt:0
    };
    $scope.result = 50000;
	$scope.rm = 'Rent';
    
    $scope.doCalculations = function(rm, a, b,c){
        $scope.result = Calculator.cal(a, b,c); 
		$scope.rm = rm;
    };

});

app.service('Calculator', function(){

    this.cal = function(a, b,c){
	    var total=5000;
		total= a * 12 * 20 + b * 50000 + c ;
		if(total >=1000000)
		{total=1000000;}
		if(total<=50000)
		{total=50000;}		
        return total;
    };  

});