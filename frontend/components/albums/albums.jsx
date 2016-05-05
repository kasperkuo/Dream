var React = require('react');
var UserStore = require('../../stores/user_store');
var AlbumCover = require('./album_cover');
var HashHistory = require('react-router').hashHistory;
var Masonry = require('react-masonry-component');

var Albums = React.createClass({
  getInitialState: function() {
    return { userProfile: UserStore.userProfile()};
  },


  render: function() {
    if (this.state.userProfile) {
      var albumsList =this.state.userProfile.albums.map(function(album, index) {
        return (
          <AlbumCover key={index} album={album} />
        );
      });
    }
    return (
      <div className="album-list-container">
        <div>{albumsList}</div>
      </div>
    );
  }

});

module.exports = Albums;
