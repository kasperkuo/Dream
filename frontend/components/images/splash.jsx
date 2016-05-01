var React = require('react');
var SignUpForm = require('../user_forms/signup_form');

var Splash = React.createClass({

  render: function() {
    var dreamText = "The home for all your artwork";
    var dreamText2 = "Upload, access, organize, edit, and share your artwork from anywhere in the world";

    return (
      <div>
        <div className="splash">
          <h1 className="dreamheader">DREAM</h1>
          <p className="dreamtext">
            {dreamText}
            <br></br>
            {dreamText2}
          </p>

          <div className="splashSignUp"><SignUpForm /></div>
        </div>
      </div>
    );
  }

});

module.exports = Splash;
