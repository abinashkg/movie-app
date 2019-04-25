import React, { Component } from 'react';
import Auth from './Auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    
    login = () => {
        Auth.login(() => {
            this.setState({redirect: true});
        })
    }

    render() {
        if(Auth.isLogin) return <Redirect to='/'/>
        let {from} = this.props.location.state || {from: {pathname: '/'}}
        if(this.state.redirect) return <Redirect to={from}/>
        return (
            <div className="custom-login">
                
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd"/>
                        </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"/> Remember me
                        </label>
                    </div>
                    <button onClick={this.login} class="btn btn-primary">Submit</button>
               
            </div>
        );
    }
}

export default Login;