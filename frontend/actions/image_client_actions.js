var ImageApiUtil = require('../util/image_api_util');

var ImageClientActions = {
  fetchAllImages: function() {
    ImageApiUtil.fetchAllImages();
  }
};

module.exports = ImageClientActions;
