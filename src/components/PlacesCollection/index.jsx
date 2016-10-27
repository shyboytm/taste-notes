import React, { Component } from 'react';

import PlacesPost from '../PlacesPost/index.jsx'

class PlacesCollection extends Component {
  render() {

    const imgTwo =    require('../../img/barista-parlor-gt.jpg');
    const imgOne =    require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end flex-wrap">
          <PlacesPost
            title="Barista Parlor Germantown"
            location="Nashville, TN"
            thoughts="Red Plum, White Grape, Brown Sugar"
            pros="Guatemala"
            cons="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="8.5 / 10"
            shopImageSource={imgTwo} />

          <PlacesPost
            title="Eighth & Roast"
            location="Nashville, TN"
            thoughts="Passion Fruit, Chocolate, Black Tea"
            pros="Nicaragua"
            cons="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="7.5 / 10"
            shopImageSource={imgOne} />
        </div>
      </div>
    );
  }
}

export default PlacesCollection;
