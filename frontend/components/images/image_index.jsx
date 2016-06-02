var React = require('react');
var ImageStore = require('../../stores/image_store');
var ImageClientActions = require('../../actions/image_client_actions');

var ImageIndexItem = require('./image_index_item.jsx');
var Masonry = require('react-masonry-component');
var Loader = require('react-loader');


var ImageIndex = React.createClass({

  getInitialState: function() {
    return {
      images: ImageStore.getDigital(),
      selected: "digital",
      loaded: false
    };
  },

  componentDidMount: function() {
    this.imageListener = ImageStore.addListener(this._onChange);
    ImageClientActions.fetchAllImages();
    this.setState({loaded: true});
  },

  componentWillUnmount: function() {
    this.imageListener.remove();
  },

  _onChange: function() {
    this.setState({ images: ImageStore.getDigital() });
  },

  changeDigital: function(e) {
    this.setState({
      images: ImageStore.getDigital(),
      selected: "digital"
     });
  },

  changeTraditional: function(e) {
    this.setState({
      images: ImageStore.getTraditional(),
      selected: "traditional"
    });
  },

  changePhotography: function(e) {
    this.setState({
      images: ImageStore.getPhotography(),
      selected: "photography"
    });
  },

  exploreNavList: function() {
    var cName = "explore-button " + "type-selected";
    if (this.state.selected === "digital") {
      return (
        <ul>
          <li className={cName} onClick={this.changeDigital}>Digital</li>
          <li className="explore-button" onClick={this.changeTraditional}>Traditional</li>
          <li className="explore-button" onClick={this.changePhotography}>Photography</li>
        </ul>
      );
    }
    else if (this.state.selected ==="traditional") {
      return (
        <ul>
          <li className="explore-button" onClick={this.changeDigital}>Digital</li>
          <li className={cName} onClick={this.changeTraditional}>Traditional</li>
          <li className="explore-button" onClick={this.changePhotography}>Photography</li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li className="explore-button" onClick={this.changeDigital}>Digital</li>
          <li className="explore-button" onClick={this.changeTraditional}>Traditional</li>
          <li className={cName} onClick={this.changePhotography}>Photography</li>
        </ul>
      );
    }

  },

  wait10: function() {
    return setTimeout(function() {
      return <div><img id="loading" src="https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif" alt="Loading..."/></div>
    }, 10000);
  },

  render: function() {
    var photos;
    if (this.state.images.length !== 0){
      photos = this.state.images.map(function(photo) {
        return <ImageIndexItem key={photo.id} photo={photo} />;
      });
    } else {
      photos = this.wait10();
    }

    var masonryOptions = {
      isFitWidth: true
    };

    return (

      <div className="wrapper">
        <div className="exploreNavBar">
          {this.exploreNavList()}
        </div>
        <Loader loaded={this.state.loaded}>
          <Masonry
            className="imageList"
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}>

            {photos}
          </Masonry>
        </Loader>
      </div>
    );
  }

});

module.exports = ImageIndex;
