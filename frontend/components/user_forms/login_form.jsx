var React = require('react');
var Modal = require("react-modal");

var SessionStore = require('../../stores/session_store.js'),
		ErrorStore = require('../../stores/error_store');
var UserClientActions = require('../../actions/user_client_actions');

var LoginForm = React.createClass({

	getInitialState: function(){
		return { modalOpen: false, email: "", password: "", errors: []};
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
			email: this.state.email,
			password: this.state.password
		};
		UserClientActions.login(loginData);
		if (SessionStore.currentUser()) {
			this.setState({modalOpen: false, name: "", email: "", password: ""});
		} else {
			this.setState({errors: ErrorStore.all()});
		}
	},

	guestLogin: function(e) {
		this.setState({ email: "guest@example.com", password: "password"});
		UserClientActions.login({ email: "guest@example.com", password: "password"});
	},

	logout: function(e){
		e.preventDefault();
		UserClientActions.logout();
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

		var errors;
		if (this.state.errors.length > 0) {
			errors = this.state.errors.map(function(error, index) {
									return <li key={index}>{error}</li>;
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
				margin          : '0 auto',
		    border          : '1px solid #ccc',
		    padding         : '20px',
		    zIndex          : 1001,
				width           : '30%',
				maxWidth        : '500px',
				height          : '420px'
		  }
		};

		return (
			<div id="login-form">
				<a id="nav-session" onClick={this.openModal}>SIGN IN</a>
				<Modal
				style={style}
				isOpen={this.state.modalOpen}
				onRequestClose={this.closeModal}>
				<div className="signup-form">
					<h1 className="signup-header">SIGN IN</h1>
	        <form className="form" onSubmit={this.handleSubmit}>
						<ul className="errors">{errors}</ul>

						<div className="field name-box">
              <input
								className="signup-input"
								type="text"
								value={this.state.email}
								onChange={this.changeEmail}
								placeholder="email"/>
							<label>Email</label>
								<span className="ss-icon">check</span>
						</div>
								<br></br>

						<div className="field email-box">
							<input
								className="signup-input"
								type="password"
								value={this.state.password}
								onChange={this.changePassword}
								placeholder="password"/>
							<label>Password</label>
							<span className="ss-icon">check</span>
						</div>

								<br></br>

					<div className="submitBox">
	          <input
							className="signup-button"
							type="submit" value="Log In"/>
						<br></br>
						<br></br>
						<button className="guest-button"
							onClick={this.guestLogin}
							type="Reset">Guest Login
						</button>
					</div>
	        </form>
				</div>
				</Modal>
			</div>
		);
	}
});

module.exports = LoginForm;
