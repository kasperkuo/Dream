var React = require('react'),
    Masonry = require('react-masonry-component'),
    Modal = require('react-modal');

var SessionStore = require('../../stores/session_store'),
    UserStore = require('../../stores/user_store');

var UserClientActions = require('../../actions/user_client_actions');
var ImageIndexItem = require('../images/image_index_item'),
    AlbumDetail = require('../albums/album_detail');

var UserDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userProfile: UserStore.userProfile(),
      selected: "Albums",
      modalOpen: false
    };
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    this.setState({ modalOpen: true });
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
    this.setState({ selected: "Albums"});
  },

  exploreNavList: function() {
    var cName = "explore-button " + "type-selected";
    if (this.state.selected === "All Images") {
      return (
        <ul>
          <li className={cName} onClick={this.allImages}>All Images</li>
          <li className="explore-button" onClick={this.showAlbums}>Albums</li>
        </ul>
      );
    } else if (this.state.selected === "Albums") {
    return (
      <ul>
        <li className="explore-button" onClick={this.allImages}>All Images</li>
        <li className={cName} onClick={this.showAlbums}>Albums</li>
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
      var albums = this.state.userProfile.albums.map(function(album, index) {
        return <AlbumDetail key={index} album={album} />;
      });
    }

    var masonryOptions = {
      isFitWidth: true
    };

    var display;

    var style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.30)',
        zIndex          : 1000,
      },
      content : {
        position        : 'fixed',
        top             : '125px',
        left            : '28%',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 1001,
        maxWidth        : '40%',
      }
    };

    if (this.state.selected === "All Images") {
      display = (<Masonry
        className="imageList"
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}>
        {imageList}
      </Masonry>
    );
  } else if (this.state.selected === "Albums") {
      display = (
        <div className="album-container">
          <div className="no-album">{albums}</div>
          <a className="album-create" onClick={this.openModal}>CREATE ALBUM</a>
            <Modal
    				style={style}
    				isOpen={this.state.modalOpen}
    				onRequestClose={this.closeModal}>
            <div className="album-form-container">
              <h1 className="signup-header">CREATE ALBUM</h1>
              <form className="album-form" onSubmit={this.handleSubmit}>

                <div className="field name-box">
                  <input
                    className="signup-input"
                    type="text"
                    value={this.state.email}
                    onChange={this.changeEmail}
                    placeholder="email"/>
                  <label>Email</label>
                    <span className="ss-icon">check</span>
                </div>
                    <br></br>

                <div className="field email-box">
                  <input
                    className="signup-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                    placeholder="password"/>
                  <label>Password</label>
                  <span className="ss-icon">check</span>
                </div>

                    <br></br>

              <div className="submitBox">
                <input
                  className="signup-button"
                  type="submit" value="Log In"/>
                <br></br>
                <br></br>
                <button className="guest-button"
                  onClick={this.guestLogin}
                  type="Reset">Guest Login
                </button>
              </div>
              </form>
            </div>
            </Modal>
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
