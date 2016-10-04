(function(){
    var live = angular.module('live', ['firebase']);
    live.controller('AnnouncementController', ["$firebaseArray","$firebaseAuth","$firebaseObject", function($firebaseArray, $firebaseAuth,$firebaseObject){ 
        var a = this;

        var ref = new Firebase("https://deltahackslive.firebaseio.com");
        var auth = $firebaseAuth(ref);
        
        a.login = function(){
            auth.$authWithOAuthPopup("google").then(function(authData) {
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }
        a.submit = function(){
            a.announcements.$add(a.text);
            a.text = "";
        }
        auth.$onAuth(function(authData){
            var obj = $firebaseObject(ref.child("users"))
            obj.$loaded(function(){
                obj[authData.uid] = authData.google.displayName;
                obj.$save();
            })
        });
        
        a.del = function(key){
            a.announcements.$remove(key);
        }
        
        a.loggedin = function(){
            return auth.$getAuth();
        }
        a.announcements = $firebaseArray(ref.child("Announcements"));
    }]);
})();