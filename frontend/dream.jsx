import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var React = require('react'),
    ReactDOM = require('react-dom'),


var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Dream</h1>
        // {this.props.children}
      </div>
    );
  }
});

// add your routes here
var routes = (
  <Route path="/" component={App}>

  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(routes, document.getElementById("root"))
})


// do not remove or rename routes, for testing purposes
window.routes = routes;
