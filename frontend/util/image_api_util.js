var ImageServerActions = require('../actions/image_server_actions'),
    SessionStore = require('../stores/session_store');

var HashHistory = require('react-router').hashHistory;

var ImageApiUtil = {
  fetchAllImages: function() {
    $.ajax({
      url: '/api/images',
      success: function(images) {
        ImageServerActions.receiveImages(images);
      }
    });
  },

  postImage: function(imageData) {
    $.ajax({
      url: '/api/images',
      method: 'POST',
      data: {image: imageData},
      success: function(image) {
        ImageServerActions.receiveImage(image);
        HashHistory.push('/');
      },
      errors: function(errors) {
        alert("invalid image params");
      }
    });
  },

  fetchSingleImage: function(id) {
    $.ajax({
      url: '/api/images/' + id,
      method: 'GET',
      success: function(image) {
        ImageServerActions.receiveImage(image);
      },
      errors: function(errors) {
        alert("Cannot find image");
      }
    });
  },

  deleteImage: function(id) {
    $.ajax({
      url: '/api/images/' + id,
      method: 'DELETE',
      success: function(image) {
        ImageServerActions.removeImage(image);
      },
      errors: function(errors) {
        alert("Cannot find image");
      }
    });
  }
};

module.exports = ImageApiUtil;
