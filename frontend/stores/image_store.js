var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var ImageStore = new Store(Dispatcher);

var _currentUser = {};
