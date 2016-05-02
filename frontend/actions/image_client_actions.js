var ImageApiUtil = require('../util/image_api_util');

var ImageClientActions = {
  fetchAllImages: function() {
    ImageApiUtil.fetchAllImages();
  },

  fetchSingleImage: function(id) {
    ImageApiUtil.fetchSingleImage(id);
  },

  postImage: function(imageData) {
    ImageApiUtil.postImage(imageData);
  },

  editImage: function(imageData) {
    ImageApiUtil.editImage(imageData);
  },

  deleteImage: function(id) {
    ImageApiUtil.deleteImage(id);
  }
};

module.exports = ImageClientActions;
