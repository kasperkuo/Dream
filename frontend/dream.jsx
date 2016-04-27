var React = require('react'),
    ReactDOM = require('react-dom');

var LoginForm = require('./components/login_form');
var SignUpForm = require('./components/signup_form.jsx');
var Modal = require("react-modal");

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <div>
      <SignUpForm /><LoginForm />
    </div>,
    document.getElementById("root")
  );
});
