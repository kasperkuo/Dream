var React = require('react'),
    Modal = require('react-modal');

var AlbumForm = React.createClass({
  getInitialState: function() {
    return { modalOpen: false };
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    this.setState({ modalOpen: true });
  },

  render: function() {

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
      <div>
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

              <textarea
                className="album-textarea"
                onChange={this.changeDescription}
                value={this.state.description}
                placeholder="DESCRIPTION"/>

              <br /><br />

              <input id="edit-submit" type="submit" value="CREATE ALBUM"/>
            </form>
            <div className="album-images">

            </div>
          </div>
          </Modal>
        </div>
    );
  }

});

module.exports = AlbumForm;
