var React = require('react');

var ImageIndexItem = React.createClass({

  render: function() {
    debugger;
    return (
      <li className="image">
        <img src={this.props.photo.image_url} />
      </li>
    );
  }

});

module.exports = ImageIndexItem;
