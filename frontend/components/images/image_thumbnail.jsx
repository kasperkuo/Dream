var React = require('react');

var ImageThumbnail = React.createClass({
  clickHandler: function(e){
    e.preventDefault();
		this.props.changeForm(e.currentTarget.src, this.props.index);
	},

	cancelImage: function(){
		this.props.removeImage(this.props.image.image_url);
	},

  render: function() {
    var cancel;
    if (this.props.removeImage){
      cancel = <div className="cancel-image" onClick={this.cancelImage}></div>;
    } else {
      cancel = "";
    }

    return (
			<div className={this.props.cName} >
				{cancel}
				<img src={this.props.image.image_url}  onClick={this.clickHandler}/>
			</div>
		);
  }

});

module.exports = ImageThumbnail;
