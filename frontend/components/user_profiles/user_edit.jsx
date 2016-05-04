var React = require('react');
var UserStore = require('../../stores/user_store');
var UserClientActions = require("../../actions/user_client_actions");
var HashHistory = require('react-router').hashHistory;

var UserUpdateForm = React.createClass({
  getInitialState: function() {
    var user = UserStore.userProfile();
    return { user: user, name: user.name};
  },

  handleSubmit: function(e) {
    var id = parseInt(this.state.user.id);
    var userData = {
      name: this.state.name,
      id: id
    };
    UserClientActions.editUserProfile(userData);
    HashHistory.push("/users/" + id);
  },

  changeName: function(e) {
    this.setState({ name: e.target.value });
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
                onChange={this.changeName}
                value={this.state.name}
                placeholder="NAME"/>

              <br /><br />

              <input id="edit-submit" type="submit" value="SAVE CHANGES"/>
            </form>
        </div>
      </div>
    );
  }

});

module.exports = UserUpdateForm;
