import React, { Component } from 'react';

import CoffeePost from '../CoffeePost/index.jsx'

class Coffee extends Component {
  render() {
    return (
      <div>
        <h1>Coffee</h1>
        <CoffeePost
          title="Las Colinas"
          coffee="Intelligentsia"
          tasteNotes="Passion Fruit, Chocolate, Black Tea"
          rating="9 / 10"
          readLink="#" />
      </div>
    );
  }
}

export default Coffee;
