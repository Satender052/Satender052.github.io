import * as React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../App';

interface IProps {
  cart: IBook[];
  handleRemoveFromCart: (id: number) => void;
}

class Cart extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const cartRows =
      this.props.cart.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        this.props.cart.map((cartRow, cartIndex) => {
          const cartId = cartIndex;
          return (
            <div key={cartIndex}>
              <div>
                <img style={{ width: '160px', height: '250px' }} src={require('./' + cartRow.imageLink)} />
              </div>
              <div>
                <h1>{'Book Title: ' + cartRow.title}</h1>
              </div>
              <div>
                <h2>{'Language: ' + cartRow.language}</h2>
              </div>

              <div>
                <h3>{'Authore: ' + cartRow.author}</h3>
              </div>
              <div>
                <h4>{'Country: ' + cartRow.country}</h4>
              </div>
              <div>
                <h5>{'Year: ' + cartRow.year}</h5>
              </div>

              <div>
                <h5>{'Total Pages: ' + cartRow.pages}</h5>
              </div>

              <div>
                {/* tslint:disable-next-line */}
                <button type="button" onClick={() => this.props.handleRemoveFromCart(cartId)}>
                  Remove from cart
                </button>
              </div>
              <br />
            </div>
          );
        })
      );

    return (
      <div>
        <div className="topnav">
          <img
            className="logo-image"
            style={{ width: '150px', height: '75px', float: 'left' }}
            src={require('./images/booklogo.png')}
          />

          <Link to="/home/cart/checkout">
            <button type="button">Checkout</button>
          </Link>

          <Link to="/">
            <button className="logout" type="button">
              Logout
            </button>
          </Link>
        </div>

        <div className="cart-page">{cartRows}</div>
      </div>
    );
  }
}

export default Cart;
