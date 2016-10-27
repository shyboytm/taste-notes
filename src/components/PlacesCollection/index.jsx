import React, { Component } from 'react';

import PlacesPost from '../PlacesPost/index.jsx'

class PlacesCollection extends Component {
  render() {

    const imgThree =  require('../../img/vista-hermosa.jpg');
    const imgTwo =    require('../../img/las-colinas.jpg');
    const imgOne =    require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end flex-wrap">
          <PlacesPost
            title="Vista Hermosa"
            location="Sweet Bloom"
            thoughts="Red Plum, White Grape, Brown Sugar"
            pros="Guatemala"
            cons="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="8.5 / 10"
            shopImageSource={imgThree} />

          <PlacesPost
            title="Las Colinas"
            location="George Howell Coffee"
            thoughts="Passion Fruit, Chocolate, Black Tea"
            pros="Nicaragua"
            cons="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="7.5 / 10"
            shopImageSource={imgTwo} />
        </div>
      </div>
    );
  }
}

export default PlacesCollection;
