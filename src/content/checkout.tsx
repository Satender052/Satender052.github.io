import * as React from 'react';

class Checkout extends React.Component {
  public render() {
    return (
      <div>
        <div className="topnav">
          <img
            className="logo-image"
            style={{ width: '150px', height: '75px', float: 'left' }}
            src={require('./images/booklogo.png')}
          />
        </div>
        <div>
          <h1>Thank you for shoping with us :)</h1>
        </div>
      </div>
    );
  }
}

export default Checkout;
