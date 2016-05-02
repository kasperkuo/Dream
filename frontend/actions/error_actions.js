var ErrorConstants = require("../constants/error_constants.js");
var Dispatcher = require('../dispatcher/dispatcher');

var ErrorActions = {
  removeErrors: function() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.REMOVE_ERRORS
    });
  }
};

module.exports = ErrorActions;
