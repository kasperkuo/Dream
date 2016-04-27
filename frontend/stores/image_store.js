var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ImageConstants = require('../constants/image_constants');

var ImageStore = new Store(Dispatcher);

var _images = {};

ImageStore.all = function() {
  var images = [];
  for (var id in _images) {
    images.push(_images[id]);
  }
  return images;
};

var resetImages = function(images) {
  _images = {};
  images.forEach(function(image) {
    _images[image.id] = image;
  });
  ImageStore.__emitChange();
};

ImageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      resetImages(payload.images);
  }
};

module.exports = ImageStore;
