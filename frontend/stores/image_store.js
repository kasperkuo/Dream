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

ImageStore.find = function(id) {
  return _images[id];
};

var resetImages = function(images) {
  _images = {};
  images.forEach(function(image) {
    _images[image.id] = image;
  });
  ImageStore.__emitChange();
};

var addImage = function(image) {
  _images[image.id] = image;
};



ImageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      resetImages(payload.images);
      break;
    case ImageConstants.IMAGE_RECEIVED:
      addImage(payload.image);
      break;
  }
};

module.exports = ImageStore;
