var app = angular.module("app", []);

app.controller("NavbarController", function($scope){
    $scope.LogMeIn = function(){
         showPopUp();
    }
    function showPopUp(){
        $("#loginform").fadeIn();
        $("#loginform").css({"visibility":"visible","display":"block"});
    }
});
app.controller("LoginVenster",function($scope){
    $scope.LogIn = function(){
        getData();
    }
    function getData(){
        $("#userContent").fadeIn();
        $("#userContent").css({"visibility":"visible", "display":"block"});
        $("#loginform").fadeOut();
        $("#loginform").css({"visibility":"hidden","display":"none"});
    }
})
