var React = require('react'),
    Link = require('react-router').Link,
    HashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');


var ImageEditForm = React.createClass({

  getInitialState: function() {
    var potentialImage = ImageStore.find(this.props.params.imageId);
    var image = potentialImage ? potentialImage : {};
    return ({
      title: image.title,
      description: image.description,
      url: image.image_url,
      imageType: "Photography"
    });
  },

  componentDidMount: function() {
    this.imageListener = ImageStore.addListener(this.handleChange);
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
  },

  changeTitle: function(e) {
    this.setState({ title: e.target.value });
  },

  changeImageType: function(e) {
    this.setState({ imageType: e.target.value });
  },

  changeDescription: function(e) {
    this.setState({ description: e.target.value });
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

  redirectHome: function(e){
    e.preventDefault();
    this.context.router.push("/");
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var id = parseInt(this.props.params.imageId);
    debugger;
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

    var redirectPhoto = <a className="edit-nav" onClick={this.returnToPhoto}>BACK TO PHOTO</a>;
    var redirectHome = <a className="edit-nav" oncClick={this.redirectHome}>RETURN TO EXPLORE</a>;
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
              <select className="select" value={this.state.imageType} onChange={this.changeImageType}>
                <option>Photography</option>
                <option>Traditional</option>
                <option>Digital</option>
              </select>
            </div>


            <input id="edit-submit" type="submit" value="SAVE CHANGES"/>
          </form>
          {redirectPhoto}<span className="edit-slash"> / </span>{redirectHome}
      </div>
    </div>
     );
  }
});

module.exports = ImageEditForm;
