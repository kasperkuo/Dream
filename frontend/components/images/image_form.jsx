var React = require('react');
var UploadButton = require('../navbar_items/upload_button');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');

var ImageForm = React.createClass({
  getInitialState: function() {
    return { images: ImageStore.all() };
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


  render: function() {
    return (
      <div>
        <UploadButton />
      </div>
    );
  }

});

module.exports = ImageForm;
