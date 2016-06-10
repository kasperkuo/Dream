var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageIndexItem = React.createClass({
  showImage: function() {
    HashHistory.push('/images/' + this.props.photo.id);
  },

  imageLoaded: function() {
    this.setState({ imageLoaded: true });
  },

  render: function() {
    return (
      <li className="image" onClick={this.showImage}>
        <img className="image_thumbnail" src={this.props.photo.image_url}/>
      </li>
    );
  }

});

module.exports = ImageIndexItem;
