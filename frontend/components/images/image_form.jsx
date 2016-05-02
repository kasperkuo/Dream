var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal");

var UploadButton = require('../navbar_items/upload_button'),
    ImageThumbnail = require('./image_thumbnail');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions'),
    ErrorActions = require('../../actions/error_actions');


var ImageForm = React.createClass({
  getInitialState: function() {
    this.currentImage = {};
    return {
      modalOpen: false,
      title: "",
      description: "",
      imageType: "",
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
    this.setState({ modalOpen: true });
  },


  componentDidMount: function() {
    // setTimeout(function() {
    //   ReactDOM.findDOMNode(this.refs.autoFocus).focus(); }.bind(this),
    // 500);
  },

  componentWillUnmount: function() {
    ErrorActions.removeErrors();
  },

  _onChange: function() {
    this.setState({ images: ImageStore.all() });
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

  handleSubmit: function(e) {
    e.preventDefault();
    this.saveInfo();
    this.state.stateImages.forEach(function(imageData, index){
			ImageClientActions.postImage(imageData);
		});
  },

  handleImages: function(images) {
    var imageList = [];

		for (var i = 0; i < images.length; i++) {
			var imageObject = {};
			imageObject["image_url"] = images[i].url;
			imageList.push(imageObject);
		}
		if (this.state.stateImages.length === 0){
			this.currentImage = images[0];
		}
		var currentImages = this.state.stateImages.concat(imageList);
		this.setState({stateImages: currentImages, visible: ""});
  },

  saveInfo: function(){
    if (this.currentImage.image_url){
			this.currentImage["title"] = this.state.title;
			this.currentImage["description"] = this.state.description;
		}
  },

  _findImage: function(url){
		for (var i = 0; i < this.state.stateImages.length; i++) {
			if (this.state.stateImages[i].url === url){
				return this.state.stateImages[i];
			}
		}
	},

  removeImage: function(url){
		var images = this.state.stateImages;
		for (var i = 0; i < images.length; i++) {
			if (images[i].url === url){
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
								changeForm={self.updateFormDetails}
								cName={cName}
								removeImage={self.removeImage}/>;
    });
	},

  updateFormDetails: function(url, index){

		this.setState({ selected: index, visible: "" });
		var image = this._findImage(url);

		if (this.currentImage.url !== image.url){
			this.saveInfo();
			this.setState({
				title: image.title,
				description: image.description
			});
		}

		this.currentImage = image;
	},

  renderSubmitButton: function(){
		var submitButton = "";
		if (this.state.stateImages.length > 0){
			submitButton = <input type="submit" value="Upload Images" className="upload-submit"/>;
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
        left            : '8.33%',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 1001,
        maxWidth        : '80%',
      }
    };

    return (
      <div id="upload-form">
        <a id="nav-session" onClick={this.openModal}>UPLOAD</a>
        <Modal
				style={style}
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
        <h1 className="upload-header">UPLOAD IMAGES</h1>
          <div className="upload-form-container">
            <form onSubmit={this.handleSubmit} className="upload-form">
              <h4 className="upload-form-header">INFORMATION</h4>
              <input
                className="upload-input"
                type="text"
                value={this.state.title}
                onChange={this.changeTitle}
                placeholder="Title"/>

              <textarea
                className="upload-textarea"
                value={this.state.description}
                onChange={this.changeDescription}
                placeholder="Description"></textarea>

              <div className="submit-button">
  							{this.renderSubmitButton()}
  						</div>

            </form>
            <div className="uploaded-images-list">
              {this.generateUploadedThumbnails()}
            </div>
              <UploadButton
                handleUpload={this.handleImages}
                imageCount={this.state.stateImages.length} />
          </div>
        </Modal>
      </div>
    );
  }

});

module.exports = ImageForm;
