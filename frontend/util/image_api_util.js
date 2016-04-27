var ImageServerActions = require('../actions/image_server_actions');

var ImageApiUtil = {
  fetchAllImages: function() {
    $.ajax({
      url: '/api/images',
      success: function(images) {
        ImageServerActions.receiveImages(images);
      }
    });
  }
};

module.exports = ImageApiUtil;
