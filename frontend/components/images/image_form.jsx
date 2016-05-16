var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    HashHistory = require('react-router').hashHistory;

var UploadButton = require('../navbar_items/upload_button'),
    ImageThumbnail = require('./image_thumbnail');
var ImageStore = require('../../stores/image_store'),
    SessionStore = require('../../stores/session_store');
var ImageClientActions = require('../../actions/image_client_actions'),
    ErrorActions = require('../../actions/error_actions');


var ImageForm = React.createClass({
  getInitialState: function() {
    this.currentImage = {};
    return {
      modalOpen: false,
      title: "",
      description: "",
      imageType: "Photography",
      imageUrl: "",
      stateImages: [],
      selected: 0,
      visible: "hidden"
    };
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    if (SessionStore.currentUser()) {
      this.setState({ modalOpen: true });
    } else {
      alert("Please log in to upload images");
    }
  },

  changeTitle: function(e) {
    e.preventDefault();
    var newTitle = e.target.value;
    this.setState({ title: newTitle });
  },

  changeDescription: function(e) {
    e.preventDefault();
    var newDescription = e.target.value;
    this.setState({ description: newDescription});
  },

  changeImageType: function(e) {
    e.preventDefault();
    var newImageType = e.target.value;
    this.setState({ imageType: newImageType});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.saveInformation();

    for (var i = 0; i < this.state.stateImages.length; i++) {
      var imageData = this.state.stateImages[i];
      ImageClientActions.postImage(imageData);
    }
    this.setState({
      modalOpen: false,
      title: "",
      description: "",
      imageType: "Photography",
      imageUrl: "",
      stateImages: [],
      selected: 0,
      visible: "hidden"
    });
    HashHistory.push("/users/" + SessionStore.currentUser().id);
  },

  handleImages: function(images) {
    var imageList = [];

		for (var i = 0; i < images.length; i++) {
			var imageObject = {};
			imageObject["image_url"] = images[i].secure_url;
      imageObject["title"] = "";
      imageObject["description"] = "";
      imageObject["image_type"] = "Photography";
			imageList.push(imageObject);
		}
    if (this.state.stateImages.length === 0){
      this.currentImage = imageList[0];
    }

		var currentImages = this.state.stateImages.concat(imageList);
		this.setState({stateImages: currentImages, visible: ""});

  },

  saveInformation: function(){
    if (this.currentImage.image_url){
			this.currentImage["title"] = this.state.title;
			this.currentImage["description"] = this.state.description;
      this.currentImage["image_type"] = this.state.imageType;
      this.currentImage["user_id"] = SessionStore.currentUser().id;
		}
  },

  findImage: function(url){
		for (var i = 0; i < this.state.stateImages.length; i++) {
			if (this.state.stateImages[i].image_url === url){
				return this.state.stateImages[i];
			}
		}
	},

  removeImage: function(url){
		var images = this.state.stateImages;
		for (var i = 0; i < images.length; i++) {
			if (images[i].image_url === url){
				images.splice(i, 1);
			}
		}
		this.setState({
			stateImages: images,
			visible: "hidden"});
	},

	generateUploadedThumbnails: function(){
    var self = this;
		return this.state.stateImages.map(function(image, index){
			var cName = "thumbnail-container";
			if (index === self.state.selected){
				cName = cName + " selected";
			}
			return <ImageThumbnail
								image={image}
								key={index}
								index={index}
								updateFormDetails={self.updateFormDetails}
								cName={cName}
								removeImage={self.removeImage}/>;
    });
	},

  updateFormDetails: function(url, index){
		this.setState({ selected: index, visible: "" });
		var image = this.findImage(url);
		if (this.currentImage.url !== image.image_url){
			this.saveInformation();
			this.setState({ title: image.title, description: image.description, imageType: image.imageType });
		}

		this.currentImage = image;
	},

  renderSubmitButton: function(){
		var submitButton = "";
		if (this.state.stateImages.length > 0){
			submitButton = <input type="submit" value="UPLOAD IMAGES" id="upload-submit"/>;
		}

		return submitButton;
	},

  render: function() {

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
        margin          : '0 auto',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 1001,
        maxWidth        : '80%',
        height          : '500px'
      }
    };
    var uploadButton;
    if (this.state.visible === "hidden") {
      uploadButton = <UploadButton
        handleUpload={this.handleImages}
        imageCount={this.state.stateImages.length} />;
    } else {
      uploadButton = "";
    }

    return (
      <div id="upload-form">
        <a id="nav-session" onClick={this.openModal}>UPLOAD</a>
        <Modal
				style={style}
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
        <h1 className="upload-header">UPLOAD IMAGES</h1>
          {uploadButton}
          <div className="upload-form-container">
            <form onSubmit={this.handleSubmit} className={"upload-form " + this.state.visible}>
              <h4 className="upload-form-header">INFORMATION</h4>
              <input
                className="upload-input"
                type="text"
                value={this.state.title}
                onChange={this.changeTitle}
                placeholder="TITLE"/>

              <textarea
                className="upload-textarea"
                value={this.state.description}
                onChange={this.changeDescription}
                placeholder="DESCRIPTION"/>

              <div className="select-container">
                <select className="select" selected={this.state.imageType} onChange={this.changeImageType}>
                  <option>Photography</option>
                  <option>Traditional</option>
                  <option>Digital</option>
                </select>
              </div>

              <br /><br />

              <div className="submit-button">
  							{this.renderSubmitButton()}
  						</div>

            </form>
            <div className="uploaded-images-list">
              {this.generateUploadedThumbnails()}
            </div>
          </div>
        </Modal>
      </div>
    );
  }

});

module.exports = ImageForm;
