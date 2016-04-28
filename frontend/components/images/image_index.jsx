var React = require('react');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');

var ImageIndexItem = require('./image_index_item.jsx');
var Packery = require('react-packery-component')(React);

var packeryOptions = {
  transitionDuration: 0
};

var ImageIndex = React.createClass({

  getInitialState: function() {
    return { images: ImageStore.all() };
  },

  componentDidMount: function() {
    this.imageListener = ImageStore.addListener(this._onChange);
    ImageClientActions.fetchAllImages();
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
  },

  _onChange: function() {
    this.setState({ images: ImageStore.all() });
  },


  render: function() {
    var photos;
    if (this.state.images.length !== 0){
      photos = this.state.images.map(function(photo) {
        return <ImageIndexItem key={photo.id} photo={photo} />;
      });
    } else {
      photos = <p> </p>;
    }

    var masonryOptions = {
      transitionDuration: 0
    };

    return (
      <div className="wrapper">
        <Packery
                className="imageList"
                elementType={'ul'}
                options={packeryOptions}
                disableImagesLoaded={false}>
            {photos}
        </Packery>
      </div>
    );
  }

});

module.exports = ImageIndex;
