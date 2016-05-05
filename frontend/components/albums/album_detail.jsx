var React = require('react');
var Masonry = require('react-masonry-component');
var AlbumStore = require('../../stores/album_store');
var ImageIndexItem = require('../images/image_index_item');
var SessionStore = require('../../stores/session_store');
var ImageClientActions = require('../../actions/image_client_actions');

var AlbumDetail = React.createClass({
  getInitialState: function() {
    return { album: AlbumStore.find(this.props.params.albumId) };
  },

  _onAlbumChange: function () {
    var id = parseInt(this.props.params.albumId);
    this.setState({album: AlbumStore.find(this.props.params.albumId) });
  },

  componentDidMount: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.albumListener = AlbumStore.addListener(this._onAlbumChange);
    ImageClientActions.fetchAlbum(parseInt(this.props.params.albumId));
  },

  componentWillUnmount: function () {
    this.albumListener.remove();
  },


  render: function() {
    if (this.state.album) {
      var imageList = this.state.album.images.map(function(image, index) {
        return <ImageIndexItem key={index} photo={image} />;
      });
    }

    var masonryOptions = {
      isFitWidth: true
    };

    return (
      <div className="album-images-container">
        <Masonry
          className="imageList"
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}>
          {imageList}
        </Masonry>

      </div>
    );
  }

});

module.exports = AlbumDetail;
