var UserServerActions = require('../actions/user_server_actions');

var UserApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success: function(){
        UserServerActions.receiveCurrentUser();
      },
      error: function(){
        UserServerActions.handleError();
      }
    });
  },

  login: function(loginData) {
    $.ajax({
      url: "/api/session",
      method: "POST",
      data: { user: loginData },
      success: function(user){
        UserServerActions.receiveCurrentUser(user);
      },
      error: function(){
        UserServerActions.handleError();
      }
    });
  },

  logout: function() {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success: function(){
        UserServerActions.removeCurrentUser();
      },
      error: function(){
        UserServerActions.handleError();
      }
    });
  },

  create: function(userData) {
    $.ajax({
      url: "/api/users",
      method: "POST",
			data: { user: userData },
			success: function(user) {
        UserServerActions.receiveCurrentUser(user);
      },
			error: function() {
        UserServerActions.handleError();
      }
    });
  },
};

module.exports = UserApiUtil;
