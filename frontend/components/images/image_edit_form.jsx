var React = require('react'),
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');


var ImageEditForm = React.createClass({

  getInitialState: function () {
  var potentialImage = ImageStore.find(this.props.params.imageId);
  var image = potentialImage ? potentialImage : {};
  return ({ title: image.title, description: image.description });
  },

  componentDidMount: function () {
    this.imageListener = ImageStore.addListener(this.handleChange);
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
  },

  componentWillUnmount: function () {
    this.imageListener.remove();
  },

  changeTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  changeDescription: function (e) {
    this.setState({ description: e.target.value });
  },

  handleChange: function () {
    var potentialImage = ImageStore.find(this.props.params.imageId);
    var image = potentialImage ? potentialImage : {};
    this.setState({ title: image.title, description: image.description });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var postData = {
      title: this.state.title,
      description: this.state.description,
      id: parseInt(this.props.params.imageId)
    };
    ImageClientActions.editPost(postData);
    hashHistory.push("/");
  },


  render: function () {
    return (
      <div className="image-edit-container">
        <div className="row header">
          <h1>EDIT FORM &nbsp;</h1>
        </div>
        <div className="row body">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.changeTitle}
              value={this.state.title}
              placeholder="Title"/>

            <br /><br />
            <textarea
              onChange={this.changeDescription}
              value={this.state.description}
              placeholder="Description"/>

            <br /><br />

            <input className="btn btn-submit" type="submit" value="Save Changes"/>
          </form>

          <Link to="/">Back to Index</Link>
        </div>
      </div>
     );
  }
});

module.exports = ImageEditForm;