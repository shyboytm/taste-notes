import React, { Component } from 'react';

import CoffeePost from '../CoffeePost/index.jsx'
// import LogoImg from '../../img/roast.jpg';

class Coffee extends Component {
  render() {

    const imgThree =  require('../../img/vista-hermosa.jpg');
    const imgTwo =    require('../../img/las-colinas.jpg');
    const imgOne =    require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end">
          <CoffeePost
            title="Vista Hermosa"
            coffee="Sweet Bloom"
            tasteNotes="Red Plum, White Grape, Brown Sugar"
            location="Guatemala"
            rating="8.5 / 10"
            readLink="#"
            coffeeImageSource={imgThree} />

          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            location="Nicaragua"
            rating="7.5 / 10"
            readLink="#"
            coffeeImageSource={imgTwo} />
        </div>
        <div className="content-end">
          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            location="Kenya"
            rating="9 / 10"
            readLink="#"
            coffeeImageSource={imgOne} />

        </div>
      </div>
    );
  }
}

export default Coffee;
