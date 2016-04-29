var ImageApiUtil = require('../util/image_api_util');

var ImageClientActions = {
  fetchAllImages: function() {
    ImageApiUtil.fetchAllImages();
  },

  postImage: function(imageUrl) {
    ImageApiUtil.postImage(imageUrl);
  }
};

module.exports = ImageClientActions;
