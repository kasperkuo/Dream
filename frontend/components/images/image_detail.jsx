var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageStore = require('../../stores/image_store'),
    ImageClientActions = require('../../actions/image_client_actions'),
    UserClientActions = require('../../actions/user_client_actions');

var ImageDetail = React.createClass({
  getInitialState: function() {
    return {image: ImageStore.find(this.props.params.imageId)};
  },

  _onChange: function () {
    var id = parseInt(this.props.params.imageId);
    this.setState({image: ImageStore.find(this.props.params.imageId) });
  },

  componentDidMount: function () {
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

  render: function() {
    var url;
    var id;
    var title;
    if (this.state.image) {
      url = this.state.image.image_url;
      id = this.state.image.user_id;
      title = this.state.image.title;
      debugger;
    }

    return (
      <div>
        <div className="imageDetail">

          <div className="imageUploadUser">{title}</div>
          <img src={url} />
          <br></br>
          <a onClick={this.redirectHome} className="backExplore">Back to Explore</a>
        </div>
      </div>
    );
  }

});

module.exports = ImageDetail;
