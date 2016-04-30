var React = require('react');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');

var ImageIndexItem = require('./image_index_item.jsx');
var Masonry = require('react-masonry-component');



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
    //
    var masonryOptions = {
      isFitWidth: true
    };

    return (

      <div className="wrapper">
        <Masonry
          className="imageList"
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}>

          {photos}
        </Masonry>
      </div>
    );
  }

});

module.exports = ImageIndex;
