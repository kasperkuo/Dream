var React = require('react'),
    Masonry = require('react-masonry-component');

var SessionStore = require('../../stores/session_store'),
    UserStore = require('../../stores/user_store');

var UserClientActions = require('../../actions/user_client_actions');
var ImageIndexItem = require('../images/image_index_item');

var UserDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userProfile: UserStore.userProfile()
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

    return (
      <div className="profile-container">
        <div className="cover-container">
          <div className="cover-header">{name}</div>
        </div>
        <div className="profile-images-container">
          <Masonry
            className="imageList"
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}>
            {imageList}
          </Masonry>
        </div>
      </div>
    );
  }

});

module.exports = UserDetail;
