var React = require('react');

var ImageStore = require('../../stores/image_store'),
    ImageClientActions = require('../../actions/image_client_actions');

var ImageDetail = React.createClass({
  getStateFromStore: function () {
   return { image: ImageStore.find(parseInt(this.props.params.imageId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    this.imageListener = ImageStore.addListener(this._onChange);
    ImageClientActions.fetchSingleImage(parseInt(this.props.params.imageId));
  },

  componentWillUnmount: function () {
    this.imageListener.remove();
  },

  render: function() {
    var url;

    return (
      <div>
        <div className="imageDetail" >
        </div>
      </div>
    );
  }

});

module.exports = ImageDetail;
