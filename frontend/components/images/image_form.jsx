var React = require('react');
var UploadButton = require('../navbar_items/upload_button');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');

var ImageForm = React.createClass({
  getInitialState: function() {
    this.currentImage = {};
    return { title: "", description: "", imageType: "" };
  },

  componentDidMount: function() {
    this.imageListener = ImageStore.addListener(this._onChange);
    ImageClientActions.fetchAllImages();
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
  },

  _onChange: function() {
    this.setState({ images: ImageStore.all() });
  },

  saveImageInfo: function(){
    if (this.currentImage.url) {
			this.currentImage["title"] = this.state.title;
			this.currentImage["description"] = this.state.description;
    }
  },

  render: function() {
    return (
      <div>
        <UploadButton />
      </div>
    );
  }

});

module.exports = ImageForm;
