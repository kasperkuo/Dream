var Dispatcher = require('../dispatcher/dispatcher');

var ImageConstants = require('../constants/image_constants'),
    UserConstants = require('../constants/user_constants'),
    ErrorConstants = require('../constants/error_constants');

var ImageServerActions = {
  receiveImages: function(images){
    Dispatcher.dispatch({
      actionType: ImageConstants.IMAGES_RECEIVED,
      images: images
    });
  },

  receiveImage: function(image){
    Dispatcher.dispatch({
      actionType: ImageConstants.IMAGE_RECEIVED,
      image: image
    });
  },

  removeImage: function(image){
    Dispatcher.dispatch({
      actionType: ImageConstants.IMAGE_REMOVED,
      image: image
    });
  },

  handleError: function(error) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },
};

module.exports = ImageServerActions;
