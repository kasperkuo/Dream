var React = require('react');

var ImageStore = require('../../stores/image_store'),
    ImageClientActions = require('../../actions/image_client_actions');

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

  render: function() {
    var url;

    if (this.state.image) {
      url = this.state.image.image_url;
    }

    return (
      <div>
        <div className="imageDetail">
          <img src={url} />
        </div>
      </div>
    );
  }

});

module.exports = ImageDetail;
