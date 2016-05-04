var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var AlbumConstants = require('../constants/image_constants');

var AlbumStore = new Store(Dispatcher);

var _album;

AlbumStore.find = function(id) {
  return _album[id];
};

AlbumStore.album = function() {
  return _album;
};

var addCurrentAlbum = function(album) {
  _album = undefined;
  _album = album;
  AlbumStore.__emitChange();
};

var addAlbum = function(image) {
  _album[image.id] = image;
};


AlbumStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AlbumConstants.RECEIVE_ALBUM:
      addAlbum(payload.album);
      break;
  }
};

module.exports = AlbumStore;
