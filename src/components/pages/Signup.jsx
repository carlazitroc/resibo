import React from 'react';
import Router, { Link, RouteHandler } from "react-router";
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

var SignUpPage = React.createClass({

  getInitialState: function(){
    return {
      lastName: '',
      firstName: '',
      dateOfBirth: '',
      mobile: '',
      signUpID: '',
      password: '',

      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
  
    return(
        <div className="signup-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/logo_small.jpg")} className="logo" /> 
              <h1>Web Portal Signup</h1> 
              <form role="form" onSubmit={this.handleSignUp} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <label key="label" className="control-label pull-left">First Name</label>
                    <input type="text" className="form-control input-underline input-lg" placeholder="First Name" required /> 
                  </div>
                  <div className="form-group">
                    <label key="label" className="control-label pull-left">Last Name</label> 
                    <input type="text" className="form-control input-underline input-lg" placeholder="Last Name" required /> 
                  </div>
                  <div className="form-group">
                   <label key="label" className="control-label pull-left">Date of Birth</label> 
                    <input type="date" className="form-control input-underline input-lg" placeholder="Date of Birth" required /> 
                  </div>
                  <div className="form-group">
                    <label key="label" className="control-label pull-left">Mobile*</label>
                    <input type="number" className="form-control input-underline input-lg" placeholder="Mobile" maxlength="8" required /> 
                  </div> 
                  <div className="form-group"> 
                    <label key="label" className="control-label pull-left">Email Address</label>
                    <input type="text" className="form-control input-underline input-lg" placeholder="Enter email" required /> 
                  </div> 
                  <div className="form-group"> 
                    <label key="label" className="control-label pull-left">Password</label>
                    <input type="password" className="form-control input-underline input-lg" placeholder="Password" required /> 
                  </div>

                </div>
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">SignUp</button>
                <Link to="/login" className="btn btn-white btn-outline btn-lg btn-rounded">Login Here</Link> 
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  setSignUpID: function(e) {

    this.setState({
      signUpID: '',
      signUpError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      signUpError: ''
    });

  },

  handleSignUp: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default SignUpPage;