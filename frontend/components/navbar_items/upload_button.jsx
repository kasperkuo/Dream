var React = require('react');
var SessionStore = require('../../stores/session_store');
var ImageClientActions = require('../../actions/image_client_actions');

var UploadButton = React.createClass({
  getInitialState: function() {
    return { currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  handleUpload: function(e) {
    e.preventDefault();
    if (this.state.currentUser) {
      var widget = cloudinary.openUploadWidget(
        window.CLOUDINARY_OPTIONS,
        function(error, payload) {
          if (!error) {
            this.props.handleUpload(payload);
          }
        }.bind(this));
    } else {
      alert('Not logged in');
    }
  },

  render: function() {
    return (
      <div className="upload-button-container">
        <a className="upload-button" onClick={this.handleUpload}>UPLOAD</a>
      </div>
    );
  }

});

module.exports = UploadButton;
