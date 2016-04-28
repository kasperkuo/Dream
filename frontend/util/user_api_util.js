var UserServerActions = require('../actions/user_server_actions');

var UserApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      statusCode: {
        299: function(errors) {
          alert( "page not found" );
          UserServerActions.handleErrors(errors.responseJSON);
        }
      },
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
        alert("successfully logged out");
        UserServerActions.removeCurrentUser();
      },
      error: function(errors){
        alert("what the fuck help pls");
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
};

module.exports = UserApiUtil;
