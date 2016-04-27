var React = require('react');
var Modal = require("react-modal");

var SessionStore = require('../../stores/session_store.js');
var UserClientActions = require('../../actions/user_client_actions');

var LoginForm = React.createClass({

	getInitialState: function(){
		return { modalOpen: false, username: "", password: ""};
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
		    left            : '33%',
		    border          : '1px solid #ccc',
		    padding         : '20px',
		    zIndex          : 1001,
				maxWidth        : '30%',
		  }
		};

		return (
			<div id="login-form">
				<a id="nav-session" onClick={this.openModal}>Sign In</a>
				<Modal
				style={style}
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
					<h1 className="signup-header">Log In</h1>
	        <form onSubmit={this.handleSubmit}>
	          <section>
	              <input
									className="signup-input"
									type="text"
									value={this.state.username}
									onChange={this.changeUsername}
									placeholder="username"/>
								<br></br>
								<input
									className="signup-input"
									type="password"
									value={this.state.password}
									onChange={this.changePassword}
									placeholder="password"/>
								<br></br>
	          </section>

	          <input
							className="signup-button"
							type="submit" value="Log In"/>
						<br></br>
						<br></br>
						<button className="guest-button"
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
