var UserServerActions = require('user_server_actions');

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

  login: function(user) {
    $.ajax({
      url: "/api/session",
      user: user,
      success: function(currentUser){
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(){
        UserServerActions.handleError();
      }
    })
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

  create: function() {

  },

  destroy: function() {

  },
};

module.exports = UserApiUtil;
