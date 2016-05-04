var UserServerActions = require('../actions/user_server_actions');

var UserApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success: function(object){
        UserServerActions.receiveCurrentUser(object);
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
      error: function(errors){
        UserServerActions.handleError(errors);
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
      error: function(errors){
        UserServerActions.handleError(errors);
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
			error: function(errors) {
        UserServerActions.handleError(errors);
      }
    });
  },

  fetchUserProfile: function(id) {
    $.ajax({
      url: "/api/users/" + id,
      method: "GET",
      success: function(user) {
        UserServerActions.receiveUserProfile(user);
      }
    });
  },

  editUserProfile: function(userData) {
    $.ajax({
      url: '/api/users/' + userData.id,
      method: 'PATCH',
      data: {user: userData},
      success: function(user) {
        UserServerActions.receiveUserProfile(user);
      },
      errors: function(errors) {
        alert("invalid user params");
      }
    });
  }
};

module.exports = UserApiUtil;
