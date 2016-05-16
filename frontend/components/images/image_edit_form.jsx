var React = require('react'),
    Link = require('react-router').Link,
    HashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store');
var UserStore = require('../../stores/user_store');
var ImageClientActions = require('../../actions/image_client_actions');
var UserClientActions = require('../../actions/user_client_actions');


var ImageEditForm = React.createClass({

  getInitialState: function() {
    var potentialImage = ImageStore.find(this.props.params.imageId);
    var image = potentialImage ? potentialImage : {};
    return ({
      title: image.title,
      description: image.description,
      url: image.image_url,
      imageType: "Photography",
      album: image.album,
      imageOnwer: UserStore.userProfile()
    });
  },

  componentDidMount: function() {
    this.imageListener = ImageStore.addListener(this.handleChange);
    this.userListener = UserStore.addListener(this._onUserChange);
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
    UserClientActions.fetchUserProfile(this.props.userId);
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
    this.userListener.remove();
  },

  _onUserChange: function() {
    this.setState({imageOwner: UserStore.userProfile()});
  },

  changeTitle: function(e) {
    this.setState({ title: e.target.value });
  },

  changeImageType: function(e) {
    debugger;
    this.setState({ imageType: e.target.value });
  },

  changeDescription: function(e) {
    this.setState({ description: e.target.value });
  },

  changeAlbum: function(e) {
    e.preventDefault();
    this.setState({ album: e.target.value });
  },

  handleChange: function() {
    var potentialImage = ImageStore.find(this.props.params.imageId);
    var image = potentialImage ? potentialImage : {};
    this.setState({
      title: image.title,
      description: image.description,
      url: image.image_url,
      imageType: image.imageType});
  },

  returnToPhoto: function(e) {
    var id = parseInt(this.props.params.imageId);
    HashHistory.push("/images/" + id);
  },

  redirectExplore: function(e){
    e.preventDefault();
    HashHistory.push("/");
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var id = parseInt(this.props.params.imageId);
    var imageData = {
      title: this.state.title,
      description: this.state.description,
      image_type: this.state.imageType,
      id: id
    };
    ImageClientActions.editImage(imageData);
    HashHistory.push("/images/" + id);
  },


  render: function () {
    if (this.state.url) {
      var url = this.state.url;
    }

    var albumList;
    if (this.state.imageOwner) {
      debugger;
      albumList = this.state.imageOwner.albums.map(function(album, index){
        return <option key={index}>{album.title}</option>;
      });
    }

    var redirectPhoto = <a className="edit-nav" onClick={this.returnToPhoto}>BACK TO PHOTO</a>;
    var redirectHome = <a className="edit-nav" onClick={this.redirectExplore}>RETURN TO EXPLORE</a>;
    return (
      <div className="edit-form-container">
        <div className="edit-form">
        <h1 className="edit-header">EDIT IMAGE</h1>
          <form onSubmit={this.handleSubmit} className="edit-form-inner">
            <input
              type="text"
              className="input-edit"
              onChange={this.changeTitle}
              value={this.state.title}
              placeholder="TITLE"/>

            <br /><br />
            <textarea
              className="edit-textarea"
              onChange={this.changeDescription}
              value={this.state.description}
              placeholder="DESCRIPTION"/>

            <br /><br />

            <div className="select-container">
              <select className="select" selected={this.state.imageType} onChange={this.changeImageType}>
                <option>Photography</option>
                <option>Traditional</option>
                <option>Digital</option>
              </select>
            </div>

            <br /><br />




            <input id="edit-submit" type="submit" value="SAVE CHANGES"/>
          </form>
          {redirectPhoto}<span className="edit-slash"> / </span>{redirectHome}
      </div>
    </div>
     );
  }
});

module.exports = ImageEditForm;
