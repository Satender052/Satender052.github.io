import * as React from 'react';
import { IBook } from '../App';

import { Link } from 'react-router-dom';

interface IProps {
  books: IBook[];
  handleAddToCart: (item: IBook) => void;
}

class Home extends React.Component<IProps, {}> {
  public render() {
    const rows = this.props.books.map((row, index) => {
      const id = index;

      return (
        <div key={index}>
          <div className="s">
            <img style={{ width: '160px', height: '250px' }} src={require('./' + row.imageLink)} />
          </div>
          <div>
            <h1>{'Book Title: ' + row.title}</h1>
          </div>
          <div>
            <h2>{'Language: ' + row.language}</h2>
          </div>
          <div>
            <h3>{'Author: ' + row.author}</h3>
          </div>
          <div>
            <h4>{'Country: ' + row.country}</h4>
          </div>

          <div>
            <h5>{'Total Pages: ' + row.pages}</h5>
          </div>

          <div>
            <h5>{'Year of Publication: ' + row.year}</h5>
          </div>

          <div>
            {/* tslint:disable-next-line */}
            <button type="button" onClick={() => this.props.handleAddToCart(this.props.books[id])}>
              Add to cart
            </button>
          </div>
          <br />
        </div>
      );
    });

    return (
      <div>
        <div className="topnav">
          <img
            className="logo-image"
            style={{ width: '150px', height: '75px', float: 'left' }}
            src={require('./images/booklogo.png')}
          />

          <Link to="/home/cart">
            <button type="button">Cart</button>
          </Link>
          <Link to="/">
            <button className="logout" type="button">
              Logout
            </button>
          </Link>
        </div>

        <br />
        <br />

        <div className="home-page">{rows}</div>
      </div>
    );
  }
}

export default Home;
