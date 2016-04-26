var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(Dispatcher);

var _currentUser = {};
var _authErrors;

//double check this currentUser function
UserStore.currentUser = function(){
  return _currentUser;
};

UserStore.errors = function(){
  if (_authErrors){
    return [].slice.call(_authErrors);
  }
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){

  }
};

module.exports = UserStore;
