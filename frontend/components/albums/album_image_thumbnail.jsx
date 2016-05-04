var React = require('react');
var PropTypes = React.PropTypes;

var AlbumImageThumbnail = React.createClass({

  render: function() {
    return (
      <div>
        <div className="image-thumbnail" onClick={this.handleSelect} />
      </div>

    );
  }

});

module.exports = AlbumImageThumbnail;
