var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageIndexItem = React.createClass({
  getInitialState: function() {
    return { imageLoaded: false };
  },

  showImage: function() {
    HashHistory.push('/images/' + this.props.photo.id);
  },

  imageLoaded: function() {
    this.setState({ imageLoaded: true });
  },

  render: function() {
    return (
      <li className="image" onClick={this.showImage}>
        <img onLoad={this.imageLoaded} src={this.props.photo.image_url}/>
      </li>
    );
  }

});

module.exports = ImageIndexItem;
