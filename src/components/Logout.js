import React, { Component } from 'react';
import Auth from './Auth';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount() {
        Auth.logout(() => {
            this.setState({
                redirect:true
            })
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to='/login'/>
        } 
        else {
            return <h1>Logging out</h1>
        }
    }
}

export default Logout;