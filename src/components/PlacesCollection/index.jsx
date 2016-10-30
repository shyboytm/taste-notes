import React, { Component } from 'react';

import PlacesPost from '../PlacesPost'

class PlacesCollection extends Component {
  render() {

    const imgComet =    require('../../img/comet-coffee.jpg');
    const imgBPGT =   require('../../img/barista-parlor-gt.jpg');
    const imgBPGS =   require('../../img/barista-parlor-gs.jpg');
    const imgEighth =  require('../../img/eighth-and-roast.jpg');
    const imgBond =    require('../../img/bond-coffee.jpg');

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
            shopImageSource={imgComet} />

          <PlacesPost
            title="Barista Parlor GT"
            location="Nashville, TN"
            good="Great ambiance, beautiful interior, usually quiet, incredible coffee and food,
                  local-made pastries, a lot of seating"
            bad="Baristas can be stuck up sometimes, everything is pretty expensive, outlets are
                 hard to come by"
            rating="8.5 / 10"
            shopImageSource={imgBPGT} />
        </div>

        <div className="content-end flex flex-wrap">
          <PlacesPost
            title="Bond Coffee"
            location="Saint Louis, MO"
            good="Great coffee both black and espresso, doesn't get crowded, great lighting, has
                  lunch and ice cream"
            bad="Not much seating, tables are very small, food isn't great, limited selection on
                  food and drinks"
            rating="7 / 10"
            shopImageSource={imgBond} />

          <PlacesPost
            title="Barista Parlor GS"
            location="Nashville, TN"
            good="Amazing interior and ambiance, great food and coffee, really nice and skilled
                  baristas, local pastries"
            bad="Almost impossible to find an outlet, music isn't great and usually too loud, gets
                 very crowded"
            rating="9 / 10"
            shopImageSource={imgBPGS} />
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
            shopImageSource={imgEighth} />
        </div>
      </div>
    );
  }
}

export default PlacesCollection;
