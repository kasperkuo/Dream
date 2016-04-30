var ImageServerActions = require('../actions/image_server_actions'),
    SessionStore = require('../stores/session_store');

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
    var currentUserId = SessionStore.currentUser().id;
    $.ajax({
      url: '/api/images',
      method: 'POST',
      data: {image: {image_url: url, user_id: currentUserId}},
      success: function(image) {
        ImageServerActions.receiveImage(image);
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
  }
};

module.exports = ImageApiUtil;
