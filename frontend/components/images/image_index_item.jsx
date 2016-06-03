var React = require('react'),
    HashHistory = require('react-router').hashHistory;

var ImageIndexItem = React.createClass({
  showImage: function() {
    HashHistory.push('/images/' + this.props.photo.id);
  },

  render: function() {
    return (
      <li className="image" onClick={this.showImage}>
        <img onLoad={this.props.imageLoaded} src={this.props.photo.image_url}/>
      </li>
    );
  }

});

module.exports = ImageIndexItem;
