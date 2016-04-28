var React = require('react');

var UploadButton = React.createClass({

  handleUpload: function(e) {
    e.preventDefault();
    var widget = cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS,
      function(error, payload) {
          if (!error) {
            this.successfulUpload(payload);
          }
        }.bind(this));
    widget.open();
  },

  successfulUpload: function(payload) {

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
