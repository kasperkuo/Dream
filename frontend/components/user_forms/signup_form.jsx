var React = require('react');
var SessionStore = require('../../stores/session_store');
var ErrorStore = require("../../stores/error_store");
var ErrorActions = require('../../actions/error_actions');
var UserClientActions = require('../../actions/user_client_actions');
var Modal = require("react-modal");

var SignUpForm = React.createClass({

	getInitialState: function(){
		return {
			modalOpen: false,
			name: "",
			email: "",
			password: "",
		};
	},

  closeModal: function(){
   this.setState({ modalOpen: false });
 },

  openModal: function(){
		ErrorActions.removeErrors();
   	this.setState({ modalOpen: true });
 },

	handleSubmit: function(e){
		e.preventDefault();
		var loginData = {
			name: this.state.name,
      email: this.state.email,
			password: this.state.password
		};
		UserClientActions.signup(loginData);
    if (SessionStore.currentUser()) {
			this.setState({
				modalOpen: false,
				name: "",
				email: "",
				password: ""
			});
		}
	},


	changeName: function(e) {
		var newName = e.target.value;
		this.setState({ name: newName });
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
		if (this.props.errors) {
			if (this.props.errors.length > 0) {
				errors = this.props.errors.map(function(error, index) {
										return <li key={index}>{error}</li>;
									});
			}
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
				height          : '480px'
			}
		};

		return (
			<div className="signup">
        <a onClick={this.openModal}>SIGN UP</a>
        <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
				onAfterOpen={this.openModal}
        style={style}>
				<div className="signup-form">
  				<h1 className="signup-header">SIGN UP</h1>
          <form className="form" onSubmit={this.handleSubmit}>
						<ul className="errors">{errors}</ul>
					 	<div className="field name-box">
              <input
                className="signup-input"
								type="text"
								value={this.state.name}
								onChange={this.changeName}/>
							<label>Name</label>
							<span className="ss-icon">check</span>
						</div>
              <br></br>

						<div className="field email-box">
              <input
                className="signup-input"
                type="text"
                value={this.state.email}
                onChange={this.changeEmail}/>
							<label>Email</label>
							<span className="ss-icon">check</span>
						</div>
              <br></br>

						<div className="field email-box">
              <input
                className="signup-input"
								type="password"
								value={this.state.password}
								onChange={this.changePassword}/>
							<label>Password</label>
							<span className="ss-icon">check</span>
						</div>

              <br></br>
						<div className="submitBox">
            	<input className="signup-button" type="submit" value="Sign Up"/>
						</div>
          </form>
				</div>
        </Modal>
			</div>
		);
	}
});

module.exports = SignUpForm;
