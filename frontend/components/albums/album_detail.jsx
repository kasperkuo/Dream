var React = require('react');
var Masonry = require('react-masonry-component');
var AlbumStore = require('../../stores/album_store');
var ImageIndexItem = require('../images/image_index_item');
var SessionStore = require('../../stores/session_store');
var ImageClientActions = require('../../actions/image_client_actions');
var HashHistory = require('react-router').hashHistory;

var AlbumDetail = React.createClass({

  getInitialState: function() {
    return { album: AlbumStore.find(this.props.params.albumId) };
  },

  _onAlbumChange: function () {
    var id = parseInt(this.props.params.albumId);
    this.setState({album: AlbumStore.find(this.props.params.albumId) });
  },

  componentDidMount: function () {
    $(document).ready(function(){
      $('html').animate({scrollTop:0}, 1);
      $('body').animate({scrollTop:0}, 1);
    });

    this.albumListener = AlbumStore.addListener(this._onAlbumChange);
    ImageClientActions.fetchAlbum(parseInt(this.props.params.albumId));
  },

  componentWillUnmount: function () {
    this.albumListener.remove();
  },

  scrollDown: function() {
    var number = window.innerHeight;
    $('html, body').animate({
      scrollTop: '+=' + number
   }, 800);
  },

  redirectHome: function(e) {
    e.preventDefault();
    HashHistory.push('/');
  },

  redirectUserPage: function(e) {
    e.preventDefault();
    var userId = this.state.album.user_id;
    HashHistory.push('/users/' + userId);
  },

  exploreNavList: function() {
    return (
      <ul>
        <li
          className="explore-button"
          onClick={this.redirectHome}>
          Explore
        </li>
        <li
          className="explore-button"
          onClick={this.redirectUserPage}>
          Return to User Page
        </li>
      </ul>
    );
  },

  render: function() {
    if (this.state.album) {
      var imageList = this.state.album.images.map(function(image, index) {
        return <ImageIndexItem key={index} photo={image} />;
      });
      var imageUrl = this.state.album.cover_photo_url;
      var imageTitle = this.state.album.title;
      var imageDescription = this.state.album.description;
    }

    var masonryOptions = {
      isFitWidth: true
    };


    $(window).scroll(function () {
      var windowHeight = window.innerHeight;
      if ($(window).scrollTop() > (windowHeight+44)) {
          $('.albumNavBar').addClass('album-navbar-fixed');
      }
      if ($(window).scrollTop() < (windowHeight+44)) {
          $('.albumNavBar').removeClass('album-navbar-fixed');
      }
    });


    return (
      <div className="album-images-container">
        <div className="album-cover-photo">
          <div className="album-cover-info">
            <div className="album-cover-title">{imageTitle}</div>
            <div className="album-cover-description">{imageDescription}</div>
              <div className="album-open-container">
                <div className="album-open" onClick={this.scrollDown}>OPEN</div>
              </div>
          </div>
          <img src={imageUrl} />
        </div>
        <div className="albumNavBar">{this.exploreNavList()}</div>

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
