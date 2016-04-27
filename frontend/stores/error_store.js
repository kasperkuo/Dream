var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var ErrorStore = new Store(Dispatcher);

var _errors = [];

ErrorStore.all = function() {
  return _errors.slice();
};

var addErrors = function(errors) {
  _errors = [];
  _errors = errors.responseJSON.errors;
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.ERROR:
      addErrors(payload.errors);
      break;
  }
};

module.exports = ErrorStore;
