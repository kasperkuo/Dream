var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageIndexItem = React.createClass({
  showImage: function() {
    HashHistory.push('/images/' + this.props.photo.id);
  },

  imageLoaded: function() {
    this.setState({ imageLoaded: true });
  },

  imageResized: function() {
    var imageUrl = this.props.photo.image_url;
    var initialUrl = /upload\S*(?:\s\S+)?/.exec(imageUrl);
    var endUrl = /(?:\S+\s)?\S*upload/.exec(imageUrl);
    if (endUrl) {
      return initialUrl[0] + "/c_scale,w_270" + endUrl[0].replace(/upload/,"");
    }
  },

  render: function() {
    return (
      <li className="image" onClick={this.showImage}>
        <img className="image_thumbnail" src={this.imageResized()}/>
      </li>
    );
  }

});

module.exports = ImageIndexItem;
