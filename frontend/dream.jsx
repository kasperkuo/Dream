var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HashHistory = require('react-router').hashHistory;

var Explore = require('./components/explore'),
    NavBar = require('./components/nav_bar'),
    Footer = require('./components/footer/footer'),
    ImageDetail = require('./components/images/image_detail.jsx'),
    ImageEditForm = require('./components/images/image_edit_form'),
    UserDetail = require('./components/user_profiles/user_detail'),
    AlbumDetail = require('./components/albums/album_detail');

var Modal = require("react-modal");
var UserClientActions = require('./actions/user_client_actions');
var ErrorStore = require('./stores/error_store');
var SessionStore = require('./stores/session_store');
// window.SessionStore = require('./stores/session_store');


var App = React.createClass({

  componentDidMount: function() {
    UserClientActions.fetchCurrentUser();
  },

  render: function() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

var routes = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Explore} />
      <Route path="/images/:imageId" component={ImageDetail} />
      <Route path="/images/:imageId/edit" component={ImageEditForm} />
      <Route path="/users/:userId" component={UserDetail} />
      <Route path="/albums/:albumId" component={AlbumDetail} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  ReactDOM.render(routes, root);
});
