import React from 'react';

class Login extends React.Component {
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
        fetch('swapr-dev-address.gatech.edu/login?username='+this.state.username+'&password='+this.state.password)
            .then((err, response) => (err, response.json()))
            .then((err, responseJson) => {
                if (err)
                    alert("Login failed, please try again");
                else {
                    const location = this.props.location;
                    if (location.state && location.state.nextPathname)
                        browserHistory.push(location.state.nextPathname);
                    else
                        browserHistory.push('/dashboard');
                }
            })
            .catch((err) => {
                // Handle error
                console.log(err);
            });
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={this.handleChange} />

                    <label>Password:</label>
                    <input type="text" name="password" onChange={this.handleChange} />

                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;
