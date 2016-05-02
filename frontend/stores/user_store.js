var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(Dispatcher);

var _user;

UserStore.userProfile = function(){
  return _user;
};


var addUser = function(user) {
  _user = undefined;
  _user = user;
  UserStore.__emitChange();
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.RECEIVE_USER:
      addUser(payload.user);
      break;
  }
};

module.exports = UserStore;
