(function(){
    var live = angular.module('live', ['firebase']);
    live.controller('AnnouncementController', ["$firebaseArray", function($firebaseArray){
        var ref = new Firebase("https://deltahackslive.firebaseio.com/Announcements");
        var a = this;
        a.announcements = $firebaseArray(ref);
        a.scrolldown = function(){
            return (a.announcements.length)?"#announcements":"#twitter";
        }
    }]);
})();