var React = require('react'),
    Masonry = require('react-masonry-component');

var SessionStore = require('../../stores/session_store'),
    UserStore = require('../../stores/user_store');

var UserClientActions = require('../../actions/user_client_actions');
var ImageIndexItem = require('../images/image_index_item'),
    AlbumDetail = require('../albums/album_detail'),
    AlbumForm = require('../albums/album_form'),
    Albums = require('../albums/albums'),
    UserUpdateForm = require('./user_edit');

var UserDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userProfile: UserStore.userProfile(),
      selected: "All Images",
      modalOpen: false
    };
  },

  _onUserChange: function() {
    this.setState({ userProfile: UserStore.userProfile() });
  },

  _onSessionChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  componentDidMount: function() {
    this.userProfileListener = UserStore.addListener(this._onUserChange);
    this.currentUserListener = SessionStore.addListener(this._onSessionChange);
    UserClientActions.fetchUserProfile(parseInt(this.props.params.userId));
  },

  componentWillUnmount: function() {
    this.userProfileListener.remove();
    this.currentUserListener.remove();
  },

  allImages: function() {
    this.setState({ selected: "All Images"});
  },

  showAlbums: function() {
    this.setState({ selected: "Albums" });
  },

  editUser: function() {
    if (this.state.currentUser.id === this.state.userProfile.id) {
      this.setState({ selected: "Edit User"});
    } else {
      alert("Can't update other user's information");
    }
  },

  exploreNavList: function() {
    var cName = "explore-button " + "type-selected";
    if (this.state.selected === "All Images") {
      return (
        <ul>
          <li className={cName} onClick={this.allImages}>All Images</li>
          <li className="explore-button" onClick={this.showAlbums}>Albums</li>
          <li className="explore-button" onClick={this.editUser}>Edit Profile</li>
        </ul>
      );
    } else if (this.state.selected === "Albums") {
      return (
        <ul>
          <li className="explore-button" onClick={this.allImages}>All Images</li>
          <li className={cName} onClick={this.showAlbums}>Albums</li>
          <li className="explore-button" onClick={this.editUser}>Edit Profile</li>
        </ul>
      );
    } else  {
      return (
        <ul>
          <li className="explore-button" onClick={this.allImages}>All Images</li>
          <li className="explore-button" onClick={this.showAlbums}>Albums</li>
          <li className={cName} onClick={this.editUser}>Edit Profile</li>
        </ul>
      );
    }
  },

  render: function() {
    if (this.state.userProfile) {
      var name = this.state.userProfile.name;
      var imageList = this.state.userProfile.images.map(function(image, index) {
        return <ImageIndexItem key={index} photo={image} />;
      });
    }

    var masonryOptions = {
      isFitWidth: true
    };

    var display;

    if (this.state.selected === "All Images") {
      display = (<Masonry
        className="imageList"
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}>
        {imageList}
      </Masonry>
    );
  } else if (this.state.selected === "Edit User") {
    display = <UserUpdateForm />;
  } else {
    display = (
      <div className="albums-container">
        <Albums user={this.state.currentUser} />
        <AlbumForm user={this.state.currentUser} />;
      </div>
    );

  }

    $(window).scroll(function () {
      if ($(window).scrollTop() > 249) {
          $('.userNavBar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 250) {
          $('.userNavBar').removeClass('navbar-fixed');
      }
    });

    return (
      <div className="profile-container">
        <div className="cover-container">
          <div className="cover-header">{name}</div>
          <div className="userNavBar">{this.exploreNavList()}</div>
        </div>
        <div className="profile-images-container">
          {display}
        </div>
      </div>
    );
  }

});

module.exports = UserDetail;
