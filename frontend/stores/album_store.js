var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var AlbumConstants = require('../constants/album_constants');

var AlbumStore = new Store(Dispatcher);

var _albums = {};


AlbumStore.album = function() {
  return _albums;
};

AlbumStore.find = function(id) {
  return _albums[id];
};


var addAlbum = function(album) {
  _albums[album.id] = album;
  AlbumStore.__emitChange();
};


AlbumStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AlbumConstants.RECEIVE_ALBUM:
      addAlbum(payload.album);
      break;
  }
};

module.exports = AlbumStore;
