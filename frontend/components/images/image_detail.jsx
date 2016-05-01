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

  goNextImage: function(e) {

  },

  goPreviousImage: function(e) {

  },

  render: function() {
    var url;
    var id;
    var title;
    var editForm;
    var deleteForm;
    var description;
    var imageUploader;

    if (this.state.image) {
      url = this.state.image.image_url;
      id = this.state.image.user_id;
      title = this.state.image.title;
    }

    console.log(SessionStore.isLogged());

    // if (SessionStore.isLogged()) {
    editForm = <a className="backExplore" onClick={this.editImage}>Edit</a>;
    deleteForm = <a onClick={this.deleteImage} className="backExplore">Delete</a>;

    // }
    imageUploader = <div className="imageOwner">Image uploader goes here.</div>;
    description = <div className="imageDescription">Description goes here.</div>;

    return (
      <div className="imageContainer">
        <div className="arrow" id="previous" onClick={this.goPreviousImage}>
          <img src="http://image005.flaticon.com/1/svg/60/60573.svg"/>
        </div>

        <div className="imageInfo">
          <h1 className="imageInfoHeader">{title}</h1>
          {imageUploader}
          {description}
          <div className="userOptions">
            {editForm}<span> / </span>{deleteForm}
            <br></br>
            <br></br>
            <a onClick={this.redirectHome} className="backExplore">Back to Explore</a>
          </div>
          <br></br>
        </div>

        <div className="imageDetail">
          <img src={url} />
        </div>

        <div className="arrow" id="next" onClick={this.goNextImage}>
          <img src="http://image005.flaticon.com/1/svg/60/60615.svg" />
        </div>
    </div>
    );
  }

});

module.exports = ImageDetail;
