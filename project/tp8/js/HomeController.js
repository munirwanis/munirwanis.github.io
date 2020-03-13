angular.module('Tp8.controllers.Home', [])

.controller('HomeController', function($scope){
    var self = this;
    self.changeBg = function() {
        $('body').css("background",  "url('../img/vlt_bg.jpg') no-repeat center center fixed");
        $('body').css("background-size", "100% auto;");
    };
});