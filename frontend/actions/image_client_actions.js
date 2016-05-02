var ImageApiUtil = require('../util/image_api_util');

var ImageClientActions = {
  fetchAllImages: function() {
    ImageApiUtil.fetchAllImages();
  },

  postImage: function(imageData) {
    ImageApiUtil.postImage(imageData);
  },

  fetchSingleImage: function(id) {
    ImageApiUtil.fetchSingleImage(id);
  },

  deleteImage: function(id) {
    ImageApiUtil.deleteImage(id);
  }
};

module.exports = ImageClientActions;
