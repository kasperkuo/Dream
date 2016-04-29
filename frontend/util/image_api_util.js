var ImageServerActions = require('../actions/image_server_actions');

var ImageApiUtil = {
  fetchAllImages: function() {
    $.ajax({
      url: '/api/images',
      success: function(images) {
        ImageServerActions.receiveImages(images);
      }
    });
  },

  postImage: function(url) {
    $.ajax({
      url: '/api/images',
      method: 'POST',
      data: {image: {image_url: url}},
      success: function(image) {
        ImageServerActions.receiveImage(image);
      },
      errors: function(errors) {
        alert("invalid image params");
      }
    });
  }
};

module.exports = ImageApiUtil;
