var React = require('react');
var PropTypes = React.PropTypes;

var UserUpdateForm = React.createClass({
  handleSubmit = function(e) {
    var id = parseInt(this.props.params.userId);
    var userData = {
      name: this.state.name;
    };
    UserClient.editImage(imageData);
    HashHistory.push("/images/" + id);
  },
  },

  render: function() {
    return (
      <div className="user-update-container">
          <div className="edit-form">
          <h1 className="edit-header">EDIT USER PROFILE</h1>
            <form onSubmit={this.handleSubmit} className="edit-form-inner">
              <input
                type="text"
                className="input-edit"
                onChange={this.changeTitle}
                value={this.state.title}
                placeholder="TITLE"/>

              <br /><br />
              <textarea
                className="edit-textarea"
                onChange={this.changeDescription}
                value={this.state.description}
                placeholder="DESCRIPTION"/>

              <br /><br />

              <div className="select-container">
                <select className="select" selected={this.state.imageType} onChange={this.changeImageType}>
                  <option>Photography</option>
                  <option>Traditional</option>
                  <option>Digital</option>
                </select>
              </div>


              <input id="edit-submit" type="submit" value="SAVE CHANGES"/>
            </form>
            {redirectPhoto}<span className="edit-slash"> / </span>{redirectHome}
        </div>
      </div>
    );
  }

});

module.exports = UserUpdateForm;
