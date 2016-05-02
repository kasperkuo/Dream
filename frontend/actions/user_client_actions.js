var UserApiUtil = require('../util/user_api_util');


var UserClientActions = {
	fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
	},

	signup: function(loginData) {
		UserApiUtil.create(loginData);
	},

	login: function(loginData) {
		UserApiUtil.login(loginData);
	},

	logout: function() {
		UserApiUtil.logout();
	},

	fetchUserProfile: function(id) {
		UserApiUtil.fetchUserProfile(id);
	}
};

module.exports = UserClientActions;
