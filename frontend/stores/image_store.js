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

ImageStore.getDigital = function() {
  var digitalImages = [];
  for (var id in _images) {
    if (_images[id].image_type === "Digital") {
      digitalImages.push(_images[id]);
    }
  }
  return digitalImages;
};

ImageStore.getTraditional = function() {
  var traditionalImages = [];
  for (var id in _images) {
    if (_images[id].image_type === "Traditional") {
      traditionalImages.push(_images[id]);
    }
  }
  return traditionalImages;
};

ImageStore.getPhotography = function() {
  var photos = [];
  for (var id in _images) {
    if (_images[id].image_type === "Photography") {
      photos.push(_images[id]);
    }
  }
  return photos;
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

var removeImage = function(image) {
  delete _images[image.id];
};

ImageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      resetImages(payload.images);
      break;
    case ImageConstants.IMAGE_RECEIVED:
      addImage(payload.image);
      break;
    case ImageConstants.IMAGE_REMOVED:
      removeImage(payload.image);
      break;
  }
};

module.exports = ImageStore;
