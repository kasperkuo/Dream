var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ErrorConstants = require('../actions/error_actions');

var ErrorStore = new Store(Dispatcher);

var _errors = [];

ErrorStore.all = function() {
  return _errors.slice();
};

var addErrors = function(errors) {
  _errors = [];
  _errors = errors;
  ErrorStore.__emitChange();
};

var removeErrors = function() {
  _errors = [];
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ErrorConstants.ERROR:
      addErrors(payload.errors);
      break;
    case ErrorConstants.REMOVE_ERRORS:
      removeErrors();
      break;
  }
};

module.exports = ErrorStore;
