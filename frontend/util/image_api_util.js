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

  editImage: function(imageData) {
    $.ajax({
      url: '/api/images/' + imageData.id,
      method: 'PATCH',
      data: {image: imageData},
      success: function(image) {
        ImageServerActions.receiveImage(image);
      },
      errors: function(errors) {
        alert("invalid image params");
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
  },

  createAlbum: function(albumData) {
    var ownerId = albumData.user_id;
    $.ajax({
      url: '/api/albums',
      method: 'POST',
      data: {image: albumData},
      success: function(album) {
        ImageServerActions.receiveAlbum(album);
        HashHistory.push('/users/' + ownerId);
      },
      errors: function(errors) {
        alert("invalid image params");
      }
    });
  }
};

module.exports = ImageApiUtil;
