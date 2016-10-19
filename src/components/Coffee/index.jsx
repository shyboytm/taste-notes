import React, { Component } from 'react';

import CoffeePost from '../CoffeePost/index.jsx'
// import LogoImg from '../../img/roast.jpg';

class Coffee extends Component {
  render() {

    const imgOne = require('../../img/roast.jpg');

    return (
      <div>
        <h1>Coffee</h1>
        <CoffeePost
          title="Las Colinas"
          coffee="George Howell Coffee"
          tasteNotes="Passion Fruit, Chocolate, Black Tea"
          rating="9 / 10"
          readLink="#"
          coffeeImageSource={imgOne} />
          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            rating="9 / 10"
            readLink="#"
            coffeeImageSource={imgOne} />
      </div>
    );
  }
}

export default Coffee;
