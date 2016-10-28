import React, { Component } from 'react';

import CoffeePost from '../CoffeePost'

class Coffee extends Component {
  render() {

    const imgThree =  require('../../img/vista-hermosa.jpg');
    const imgTwo =    require('../../img/las-colinas.jpg');
    const imgOne =    require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end flex-wrap">
          <CoffeePost
            title="Vista Hermosa"
            coffee="Sweet Bloom"
            tasteNotes="Red Plum, White Grape, Brown Sugar"
            location="Guatemala"
            thoughts="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="8.5 / 10"
            coffeeImageSource={imgThree} />

          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            location="Nicaragua"
            thoughts="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="7.5 / 10"
            coffeeImageSource={imgTwo} />
        </div>

        <div className="content-end flex-wrap">
          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            location="Kenya"
            thoughts=""
            rating="9 / 10"
            coffeeImageSource={imgOne} />
        </div>
      </div>
    );
  }
}

export default Coffee;
