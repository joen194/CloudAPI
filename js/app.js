

var app = angular.module("myapp", []);
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

var json;
app.controller("BodyCtrl",function($scope, $http){
        console.log("int controller");
        console.log("in function doe iets");
        $http.get("http://localhost:3000")
            .success(function(posts){
                console.log("in success");
                console.log(posts);
                json = posts;

                //$scope.data = posts.data[2].postcode;
            })
});
var myLatLng = {lat: 51.22155485068400, lng: 4.39799322948400};
var positie = {lat: 51.22155485068400, lng: 4.39799322948400};
var map;
var x;
var y;
function setMarker($scope){
    var showX;
    $scope.toggle = function(){
        console.log("In toggle");

            x = json.data[6].point_lat;
            y = json.data[6].point_lng;
            showX ={lat: parseFloat(x), lng: parseFloat(y)};
            console.log(showX);

            var marker = new google.maps.Marker({
                position: showX,
                map: map,
                title: 'Hello World!'
            });
            console.log(x + " " + y);

    };
    $scope.toggletest = function(){
        $scope.data = "";
        var plaats = [];
        var plaats2 = [];
        for (var i = 0; i < json.data.length; i++) {
            plaats.push(json.data[i].district);
        }
        $.each(plaats, function(i, el){
            if($.inArray(el, plaats2) === -1) plaats2.push(el);
        });
        for(var i = 0; i< plaats2.length; i++){
            $scope.data += plaats2[i];
            $scope.data += " ";
        }
    }
    };

}
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: myLatLng
    });
}

function dropdownmenu($scope){

}

function  getplaatsen(){

}



/*
app.controller("mijnCtrl",function($scope,$http){

    $http.get("http://localhost:3000")
    .success(function(posts){
        $scope.posts = posts;
    });


    $scope.addPost =  function()
    {
        $http.post("http://localhost:3000",{
            "username":"tt",
            "body":"hello body"
        }).success(function(post){
            console.log(post);
            $scope.posts.unshift(post);
        });

    };


});*/
