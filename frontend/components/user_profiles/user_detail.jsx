var React = require('react');

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

  allImages: function() {
    return this.state.userProfile.images.map(function(image, index) {
      return <ImageIndexItem key={index} image={image} />;
    });
  },

  render: function() {
    if (this.state.userProfile) {
      var username = this.state.userProfile.username;
      console.log(this.state.userProfile.images);
    }

    return (
      <div>
        <div className="profile-container">
          <div className="cover-container">
            {username}
          </div>
          <div className="profile-images-container">


          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserDetail;
