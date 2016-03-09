var app = angular.module("app", []);

app.controller("NavbarController", function($scope){
    $scope.LogMeIn = function(){
         showPopUp();
    }
    function showPopUp(){
        $("#loginform").fadeIn();
        $("#loginform").css({"visibility":"visible","display":"block"});
    }
})
