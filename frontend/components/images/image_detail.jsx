var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store'),
    SessionStore = require('../../stores/session_store'),
    ImageClientActions = require('../../actions/image_client_actions'),
    UserClientActions = require('../../actions/user_client_actions');

var ImageEditForm = require('./image_edit_form');

var ImageDetail = React.createClass({
  getInitialState: function() {
    return {
      image: ImageStore.find(this.props.params.imageId),
      currentUser: SessionStore.currentUser(),
      images: ImageStore.all(),
      display: "description"
    };
  },

  _onImageChange: function () {
    var id = parseInt(this.props.params.imageId);
    this.setState({image: ImageStore.find(this.props.params.imageId) });
    this.setState({images: ImageStore.all()});
    this.setState({display: "description"});
  },

  _onSessionChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  componentDidMount: function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.imageListener = ImageStore.addListener(this._onImageChange);
    this.currentUserListener = SessionStore.addListener(this._onSessionChange);
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
    ImageClientActions.fetchAllImages();
  },

  componentWillUnmount: function () {
    this.imageListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ImageClientActions.fetchSingleImage(parseInt(newProps.params.imageId));
    ImageClientActions.fetchAllImages();
  },

  redirectHome: function(e){
    e.preventDefault();
    HashHistory.push('/');
  },

  editImage: function(e){
    e.preventDefault();
    var url = "/images/" + this.state.image.id.toString() + "/edit";
    HashHistory.push(url);
    this.setState({display: "edit"});
  },

  deleteImage: function(e){
    e.preventDefault();
    ImageClientActions.deleteImage(this.props.params.imageId);
    HashHistory.push('/');
  },

  goNextImage: function(e) {
    var imageList = this.state.images;
    var nextIndex = imageList.indexOf(this.state.image) + 1;
    var nextId;
    if (nextIndex === imageList.length) {
      nextId = imageList[0].id;
    } else {
      nextId = imageList[nextIndex].id.toString();
    }
    HashHistory.push("/images/" + nextId.toString());
  },

  goPreviousImage: function(e) {
    var imageList = this.state.images;
    var prevIndex = imageList.indexOf(this.state.image) - 1;
    var prevId;
    if (this.state.image === imageList[0]) {
      prevId = imageList[imageList.length - 1].id.toString();
    } else {
      prevId = imageList[prevIndex].id.toString();
    }
    HashHistory.push("/images/" + prevId.toString());
  },

  render: function() {
    var slash = "slashHidden";
    if (this.state.image) {
      var url = this.state.image.image_url;
      var id = this.state.image.user_id;
      var title = this.state.image.title;
      var imageUploader = <div className="imageOwner">uploaded by {this.state.image.user.name}</div>;
      var description = <div className="imageDescription">{this.state.image.description}</div>;
    }

    //changed this to currentUser.id = image.user_id
    if (this.state.currentUser &&
          this.state.currentUser.id === this.state.image.user_id) {
      var editForm = <a className="userFeatures" onClick={this.editImage}>EDIT</a>;
      var deleteForm = <a onClick={this.deleteImage} className="userFeatures">DELETE</a>;
      var slash = "";

    }
    // imageUploader = <div className="imageOwner">Image uploader goes here.</div>;

    return (
      <div>
        <div className="arrow" id="previous" onClick={this.goPreviousImage}>
          <img src="http://image005.flaticon.com/1/svg/60/60573.svg"/>
        </div>

        <div className="imageContainer">

          <div className="imageInfo">
            <h1 className="imageInfoHeader">{title}</h1>
            {imageUploader}
            {description}
            <div className="userOptions">
              {editForm}<span className={slash}> / </span>{deleteForm}
              <br></br>
              <br></br>
              <a onClick={this.redirectHome} className="backExplore">BACK TO EXPLORE</a>
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
  </div>
    );
  }

});

module.exports = ImageDetail;
