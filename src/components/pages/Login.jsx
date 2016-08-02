import React from 'react';
import Router, { Link, RouteHandler } from "react-router";
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
  
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/logo_small.jpg")} className="logo" /> 
              <h1>Web Portal Login</h1> 
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" placeholder="Email" required /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" placeholder="Password" required /> 
                  </div> 
                </div> 
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button>
                <Link to="/signup" className="btn btn-white btn-outline btn-lg btn-rounded">Sign Up Here</Link> 
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  setLoginID: function(e) {

    this.setState({
      loginID: '',
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default LoginPage;