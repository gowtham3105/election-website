import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val1: "hello in state"
        }
    }

    render() {
        return (

            <h1>ghi{this.state.val} gfg</h1>
        )
    }

}

export default Login;

