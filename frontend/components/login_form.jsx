var React = require('react');
var Modal = require("react-modal");

var SessionStore = require('../stores/session_store.js');
var UserClientActions = require('../actions/user_client_actions');
var CurrentUserState = require('../mixins/current_user_state');

var LoginForm = React.createClass({
	mixins: [CurrentUserState],

	getInitialState: function(){
		return {username: "", password: ""};
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
			password: this.state.password
		};
		UserClientActions.login(loginData);
		this.setState({ modalOpen: false });
	},

	guestLogin: function(e) {
		this.setState({ username: "guest", password: "password"});
		UserClientActions.guestLogin();
	},

	logout: function(e){
		e.preventDefault();
		UserClientActions.logout();
	},

	changeUsername: function(e) {
		var newUsername = e.target.value;
		this.setState({ username: newUsername });
	},

	changePassword: function(e) {
		var newPassword = e.target.value;
		this.setState({ password: newPassword });
	},

	render: function(){
		return (
			<div id="login-form">
				<button id="nav-session" onClick={this.openModal}>Sign In</button>
				<Modal
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
					<h1>HI SIGN IN</h1>
	        <form onSubmit={this.handleSubmit}>
	          <section>
	            <label> Username:
	              <input
									type="text"
									value={this.state.username}
									onChange={this.changeUsername}/>
	            </label>

	            <label> Password:
	              <input
									type="password"
									value={this.state.password}
									onChange={this.changePassword}/>
	            </label>
	          </section>

	          <input type="submit" value="Log In"/>
						<button
							onClick={this.guestLogin}
							type="Reset">Guest Login
						</button>
	        </form>
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
