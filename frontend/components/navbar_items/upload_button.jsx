var React = require('react');
var SessionStore = require('../../stores/session_store');
var ImageClientActions = require('../../actions/image_client_actions');

var UploadButton = React.createClass({
  getInitialState: function() {
    return { isLogged: false };
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ isLogged: SessionStore.isLogged() });
  },

  handleUpload: function(e) {
    e.preventDefault();
    if (this.state.isLogged) {
      var widget = cloudinary.openUploadWidget(
        window.CLOUDINARY_OPTIONS,
        function(error, payload) {
          if (!error) {
            this.successfulUpload(payload);
          }
        }.bind(this));
    } else {
      alert('Not logged in');
    }
  },

  successfulUpload: function(payload) {
    payload.forEach(function(image){
      ImageClientActions.postImage(image.url);
    });
  },

  render: function() {

    return (
      <div>
        <a className="upload-button" onClick={this.handleUpload}>UPLOAD</a>
      </div>
    );
  }

});

module.exports = UploadButton;
