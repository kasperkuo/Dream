var React = require('react');
var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');
var CurrentUserState = require('../mixins/current_user_state');
var Modal = require("react-modal");

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
				<button onClick={this.openModal}>Sign In</button>
				<Modal
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
					<h1>HI</h1>
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
	        </form>
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
