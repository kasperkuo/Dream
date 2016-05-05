var React = require('react'),
    Modal = require('react-modal');

var AlbumImageThumbnail = require('./album_image_thumbnail');
var ImageClientActions = require('../../actions/image_client_actions');

var AlbumForm = React.createClass({
  getInitialState: function() {
    return {
      modalOpen: false,
      title: "",
      coverPhotoUrl: "",
      images: []
    };
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    this.setState({ modalOpen: true });
  },

  changeTitle: function(e) {
    this.setState({ title: e.target.value});
  },

  changeCoverPhoto: function(e) {
    this.setState({ coverPhotoUrl: e.target.value });
  },

  handleSelect: function(e) {

  },

  handleSubmit: function(e) {
    e.preventDefault();
    var albumData = {
      title: this.state.title,
      coverPhotoUrl: this.state.coverPhotoUrl,
      user_id: this.props.user.id
    };

    ImageClientActions.createAlbum(albumData);
    this.setState({
      modalOpen: false,
      title: "",
      coverPhotoUrl: "",
      images:[]
    });
  },

  render: function() {
    if (this.props.images) {
      var albumImageThumbnails = this.props.images.map(function(image, index) {
        return <AlbumImageThumbnail key={index} image={image} />;
      });
    }

    var style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.30)',
        zIndex          : 1000,
      },
      content : {
        position        : 'fixed',
        top             : '125px',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 1001,
        width           : '90%',
        height          : "400px"
      }
    };

    return (
      <div className="album-create-container">
        <a className="album-create" onClick={this.openModal}>CREATE ALBUM</a>
          <Modal
          style={style}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <div className="album-form-container">
            <h1 className="album-header">CREATE ALBUM</h1>
            <form className="album-form" onSubmit={this.handleSubmit}>
              <h3 className="description-header">INFORMATION</h3>
              <input
                type="text"
                className="album-title"
                onChange={this.changeTitle}
                value={this.state.title}
                placeholder="TITLE"/>

              <br /><br />

                <input
                  type="text"
                  className="album-title"
                  onChange={this.changeCoverPhoto}
                  value={this.state.coverPhotoUrl}
                  placeholder="COVER PHOTO URL"/>

              <br /><br />

              <input id="edit-submit" type="submit" value="CREATE ALBUM"/>
            </form>
            <div className="album-images-container">
              {albumImageThumbnails}
            </div>
          </div>
          </Modal>
        </div>
    );
  }

});

module.exports = AlbumForm;
