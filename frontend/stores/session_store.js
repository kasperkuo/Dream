var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var SessionStore = new Store(Dispatcher);

var myStorage = localStorage;
var _currentUser = JSON.parse(myStorage.getItem("currentUser"));

//double check this currentUser function
// SessionStore.currentUser = function(){
//   return _currentUser;
// };

SessionStore.currentUser = function() {
  if (myStorage.getItem("currentUser") === "false") {
    return null;
  } else {
    return _currentUser;
  }
};

// var addCurrentUser = function(user) {
//   _currentUser = undefined;
//   _currentUser = user;
//   SessionStore.__emitChange();
// };
//
// var removeCurrentUser = function() {
//   _currentUser = undefined;
//   SessionStore.__emitChange();
// };

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.LOGIN:
      _currentUser = payload.user;
      myStorage.setItem("currentUser", JSON.stringify(payload.user));
      break;
    case UserConstants.LOGOUT:

      myStorage.setItem("currentUser", "false");
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
