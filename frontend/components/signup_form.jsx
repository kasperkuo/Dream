var React = require('react');
var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');
var CurrentUserState = require('../mixins/current_user_state');
var Modal = require("react-modal");

var SignUpForm = React.createClass({
	mixins: [CurrentUserState],

	getInitialState: function(){
		return { modalOpen: false, username: "", email: "", password: ""};
	},

  closeModal: function(){
   this.setState({ modalOpen: false });
 },

  openModal: function(){
   this.setState({ modalOpen: true });
 },

	handleSubmit: function(e){
		e.preventDefault();
		var loginData = {
			username: this.state.username,
      email: this.state.email,
			password: this.state.password
		};
		UserClientActions.signup(loginData);
    this.setState({
			modalOpen: false,
			username: "",
			email: "",
			password: ""
		});

	},

	// logout: function(e){
	// 	e.preventDefault();
	// 	UserClientActions.logout();
	// },

	changeUsername: function(e) {
		var newUsername = e.target.value;
		this.setState({ username: newUsername });
	},

  changeEmail: function(e) {
    var newEmail = e.target.value;
    this.setState({ email: newEmail });
  },


	changePassword: function(e) {
		var newPassword = e.target.value;
		this.setState({ password: newPassword });
	},

	render: function(){
		return (
			<div id="signup-form">
        <button onClick={this.openModal}>Sign Up</button>
        <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>

  				<h1>HI SIGN UP</h1>
          <form onSubmit={this.handleSubmit}>
            <section>
              <label> Username:
                <input
  								type="text"
  								value={this.state.username}
  								onChange={this.changeUsername}/>
              </label>

              <label> E-mail:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.changeEmail}/>
              </label>

              <label> Password:
                <input
  								type="password"
  								value={this.state.password}
  								onChange={this.changePassword}/>
              </label>

            </section>

            <input type="submit" value="Sign Up"/>
          </form>
        </Modal>
			</div>
		);
	}
});

module.exports = SignUpForm;
