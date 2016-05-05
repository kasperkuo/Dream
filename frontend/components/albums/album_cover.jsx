var React = require('react');
var HashHistory = require('react-router').hashHistory;

var AlbumCover = React.createClass({
  showAlbum: function() {
    HashHistory.push('/albums/' + this.props.album.id);
  },

  render: function() {
    return (
      <div className="album-cover-container" onClick={this.showAlbum}>
        <img src={this.props.album.cover_photo_url} />
      </div>
    );
  }

});

module.exports = AlbumCover;
