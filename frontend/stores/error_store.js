var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants');

var ErrorStore = new Store(Dispatcher);

var _errors = [];

ErrorStore.all = function() {
  return _errors.slice();
};

var resetErrors = function(errors) {
  _errors = [];
  _errors = errors;
  ErrorStore.__emitChange();
};

var removeErrors = function() {
  _errors = [];
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ErrorConstants.ERROR:
      resetErrors(payload.errors);
      break;
    case ErrorConstants.REMOVE_ERRORS:
      removeErrors();
      break;
  }
};

module.exports = ErrorStore;
