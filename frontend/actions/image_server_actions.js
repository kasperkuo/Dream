var Dispatcher = require('../dispatcher/dispatcher');
var ImageConstants = require('../constants/image_constants');

var ImageServerActions = {
  receiveImages: function(images){
    Dispatcher.dispatch({
      actionType: ImageConstants.IMAGES_RECEIVED,
      images: images
    });
  }
};

module.exports = ImageServerActions;
