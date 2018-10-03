import * as React from 'react';
import { Link } from 'react-router-dom';

interface IState {
  userid: string;
  password: string;
  flagEmpty: boolean;
}

class Register extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      flagEmpty: false,
      password: '',
      userid: ''
    };
  }

  // public dB = (uId: any, Pass: any) => [uId, Pass];

  public submitForm = (event: any) => {
    this.setState(state => ({ flagEmpty: false }));

    const password = this.state.password;
    const userid = this.state.userid;

    if (userid === '' || password === '') {
      this.setState(state => ({ flagEmpty: true }));
    } else {
      this.props.history.push('/');
    }
  };

  public handleUseridChange = (event: any) => {
    this.setState({ userid: event.target.value });
  };
  public handlePasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  public render() {
    const messageToShow = this.state.flagEmpty ? <h6>Please Enter Userid and Password for registration.</h6> : <h1 />;

    return (
      <div>
        <div className="topnav">
          <img
            className="logo-image"
            style={{ width: '150px', height: '75px', float: 'left' }}
            src={require('../content/images/booklogo.png')}
          />

          <Link to="/">
            <button type="button">Login</button>
          </Link>
        </div>

        <div>
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
            <input type="button" value="Register" onClick={this.submitForm} />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
