var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store'),
    SessionStore = require('../../stores/session_store'),
    ImageClientActions = require('../../actions/image_client_actions'),
    UserClientActions = require('../../actions/user_client_actions');

var ImageEditForm = require('./image_edit_form');

var ImageDetail = React.createClass({
  getInitialState: function() {
    return {image: ImageStore.find(this.props.params.imageId)};
  },

  _onChange: function () {
    var id = parseInt(this.props.params.imageId);
    this.setState({image: ImageStore.find(this.props.params.imageId) });
  },

  componentDidMount: function () {
    UserClientActions.fetchCurrentUser();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
    this.imageListener = ImageStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.imageListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ image: ImageStore.find(newProps.params.imageId) });
  },

  redirectHome: function(e){
    e.preventDefault();
    UserClientActions.fetchCurrentUser();
    HashHistory.push('/');
  },

  editImage: function(e){
    e.preventDefault();
    var url = "/images/" + this.state.image.id.toString() + "/edit";
    HashHistory.push(url);
  },

  deleteImage: function(e){
    e.preventDefault();
    ImageClientActions.deleteImage(this.props.params.imageId);
    HashHistory.push('/');
  },

  render: function() {
    var url;
    var id;
    var title;
    var editForm;

    if (this.state.image) {
      url = this.state.image.image_url;
      id = this.state.image.user_id;
      title = this.state.image.title;
    }

    console.log(SessionStore.isLogged());

    // if (SessionStore.isLogged()) {
      editForm = <a onClick={this.editImage}>Edit</a>;
    // }

    return (
      <div>
        <div className="imageDetail">

          <div className="imageUploadUser">{title}</div>
          <br></br>
          {editForm}
          <br></br>
          <img src={url} />
          <br></br>
          <a onClick={this.deleteImage} className="backExplore">Delete</a>
          <br></br>
          <br></br>
          <a onClick={this.redirectHome} className="backExplore">Back to Explore</a>
          <br></br>
        </div>
      </div>
    );
  }

});

module.exports = ImageDetail;
