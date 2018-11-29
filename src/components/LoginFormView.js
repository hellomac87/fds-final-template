import React, { Component } from 'react';

class LoginFormView extends Component {

    render() {
        return (
            <div>
                <input type="text"/>
                <input type="password"/>
                <button>login</button>
            </div>
        );
    }
}

export default LoginFormView;