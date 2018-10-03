import * as React from 'react';
import { Link } from 'react-router-dom';

interface IState {
  userid: string;
  password: string;
  flagEmpty: boolean;
  flagWrong: boolean;
}

class Login extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      flagEmpty: false,
      flagWrong: false,
      password: '',
      userid: ''
    };
  }

  public submitForm = (event: any) => {
    this.setState(state => ({ flagEmpty: false }));
    this.setState(state => ({ flagWrong: false }));

    const password = this.state.password;
    const userid = this.state.userid;
    if (userid === '' || password === '') {
      this.setState(state => ({ flagEmpty: true }));
    } else if (userid === 'ssr' && password === 'ssr') {
      this.props.history.push('/home');
    } else {
      this.setState(state => ({ flagWrong: true }));
    }
  };

  public handleUseridChange = (event: any) => {
    this.setState({ userid: event.target.value });
  };
  public handlePasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  public render() {
    const messageToShow = this.state.flagEmpty ? (
      <h6>Please Enter User Name and Password.</h6>
    ) : this.state.flagWrong ? (
      <h6>Please Enter Correct User Name and Password.</h6>
    ) : (
      <h1 />
    );

    return (
      <div>
        <div className="topnav">
          <img
            className="logo-image"
            style={{ width: '150px', height: '75px', float: 'left' }}
            src={require('../content/images/booklogo.png')}
          />

          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </div>

        <div className="form">
          <form>
            <label>username: </label>
            <input
              type="text"
              name="userid"
              placeholder="Enter User Name"
              value={this.state.userid}
              onChange={this.handleUseridChange}
            />
            <label>password: </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <div>{messageToShow}</div>
            <input type="button" value="Submit" onClick={this.submitForm} />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
