import React, { Component } from 'react';

import PlacesPost from '../PlacesPost'

class PlacesCollection extends Component {
  render() {

    const imgFour =   require('../../img/barista-parlor-gt.jpg');
    const imgThree =  require('../../img/eighth-and-roast.jpg');
    const imgTwo =    require('../../img/comet-coffee.jpg');
    // const imgOne =    require('../../img/hakimson-estate-peaberry.jpg');

    return (
      <div className="w-90-ns w-100 pv5-ns center cf">
        <div className="content-end flex flex-wrap">
          <PlacesPost
            title="Comet Coffee"
            location="Saint Louis, MO"
            good="Pastries are amazing, great care for their coffee brewing, employees
                  are very kind and helpful, outlets everywhere"
            bad="Not much seating, very crowded if you come in at the wrong time, espresso drinks
                 aren't very good"
            rating="8.5 / 10"
            shopImageSource={imgTwo} />

          <PlacesPost
            title="Barista Parlor GT"
            location="Nashville, TN"
            good="Great ambiance, beautiful interior, usually quiet, incredible coffee and food,
                  local-made pastries, a lot of seating"
            bad="Baristas can be stuck up sometimes, everything is pretty expensive, outlets are
                 hard to come by  to come by  to come by  to come by  to come by"
            rating="8.5 / 10"
            shopImageSource={imgFour} />
        </div>

        <div className="content-end flex flex-wrap">
          <PlacesPost
            title="Eighth & Roast"
            location="Nashville, TN"
            good="Great espresso drinks, awesome pastries and breakfast foods, decent amount of
                  natural light"
            bad="Can get very crowded, black coffee isn't too great, seating uncomfortable
                 for long periods of sitting"
            rating="7 / 10"
            shopImageSource={imgThree} />
          
          <PlacesPost
            title="Barista Parlor Germantown"
            location="Nashville, TN"
            good="Guatemala"
            bad="Great ambiance, beautiful interior, usually quiet, incredible coffee and food"
            rating="8.5 / 10"
            shopImageSource={imgThree} />
        </div>
      </div>
    );
  }
}

export default PlacesCollection;
