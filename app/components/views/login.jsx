import React from 'react';

class LoginEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        // Send this.state.username and this.state.password as parameters for a login HTTP request
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} />

                <label>Password:</label>
                <input type="text" name="password" onChange={this.handleChange} />

                <input type="submit" value="Login" />
            </form>
        );
    }
}
