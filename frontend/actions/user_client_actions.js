var UserApiUtil = require('../util/user_api_utl');


var UserClientActions = {
	fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser();
	},

	signup: function(user){
		UserApiUtil.post({
			url: "/api/user",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	login: function(user){
		UserApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	guestLogin: function(){
		UserActions.login({username: "guest", password: "password"});
	},

	logout: function(){
		UserApiUtil.logout();
	}
};

module.exports = UserClientActions;
