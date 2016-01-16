(function(){
    var live = angular.module('live', ['firebase']);
    live.controller('AnnouncementController', ["$firebaseArray", function($firebaseArray){
        var ref = new Firebase("https://deltahackslive.firebaseio.com/Announcements");
        var a = this;
        a.announcements = $firebaseArray(ref);
        a.scrolldown = function(){
            return (a.announcements.length)?"#announcements":"#twitter";
        }
        
        if (Notification.permission !== 'denied' && Notification.permission !== "granted"){
            Notification.requestPermission();
        }
        
        function notifyMe(x) {
          if (Notification.permission === "granted") {
            var notification = new Notification(x);
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
              if (permission === "granted") {
                var notification = new Notification(x);
              }
            });
          }
        }
        a.announcements.$loaded(function(){
            a.announcements.$watch(function(e){
                if(e.event == "child_added"){
                    notifyMe(a.announcements.$getRecord(e.key).$value);
                }
            });
        });
        
        
        
        
    }]);
})();