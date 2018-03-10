import React, { Component } from 'react';

import PlacesPost from '../PlacesPost'

class PlacesCollection extends Component {
  render() {

    const imgNemesis     =  require('../../img/nemesis-coffee.jpg');
    const imgRevolver    =  require('../../img/revolver-coffee.jpg');
    const imgTimbertrain =  require('../../img/timbertrain-coffee.jpg');
    const imgBuroEspresso=  require('../../img/buro-espresso-bar.jpg');
    const imgFrenchTruck =  require('../../img/french-truck-coffee.jpg');
    const imgEdgeAlley =    require('../../img/edge-alley.jpg');
    const img387Pantry =    require('../../img/387-pantry.jpg');
    const imgCityAndState = require('../../img/city-and-state.png');
    const imgPinewood =     require('../../img/pinewood-social.jpg');
    const imgCrema =        require('../../img/crema-coffee.jpg');
    const imgReveille =     require('../../img/reveille-coffee.jpg');
    const imgMazarine =     require('../../img/mazarine-coffee.jpg');
    const imgSightglass =   require('../../img/sightglass-coffee.jpg');
    const imgComet =        require('../../img/comet-coffee.jpg');
    const imgMudHouse =     require('../../img/mud-house.jpg');
    const imgSump =         require('../../img/sump-coffee.jpg');
    const imgBPGT =         require('../../img/barista-parlor-gt.jpg');
    const imgBPGS =         require('../../img/barista-parlor-gs.jpg');
    const imgEighth =       require('../../img/eighth-and-roast.jpg');
    const imgBond =         require('../../img/bond-coffee.jpg');

    return (
      <div className="w-90-ns w-100 pv4 center cf">
        <div className="content-end flex flex-wrap">

          <PlacesPost
            title="Nemesis Coffee"
            location="Vancouver, Canada"
            good="Lovely interior, nice variety in coffee types, great pour over, great seating and wifi"
            bad="Crowded, food isn't great, area is iffy"
            rating="8.5 / 10"
            shopImageSource={imgNemesis} />

          <PlacesPost
            title="Revolver Coffee"
            location="Vancouver, Canada"
            good="Cozy but modern interior, polite staff, great espresso drinks, unique branding, equipment eye candy"
            bad="Not much seating, limited black coffee choices, space feels cramped"
            rating="8 / 10"
            shopImageSource={imgRevolver} />

          <PlacesPost
            title="Timbertrain"
            location="Vancouver, Canada"
            good="Unique and pretty interior, great espresso and pour over drinks, friendly staff"
            bad="Small with minimal seating, spotty wifi, only patries for food"
            rating="8 / 10"
            shopImageSource={imgTimbertrain} />

          <PlacesPost
            title="Buro Espresso Bar"
            location="Vancouver, Canada"
            good="Plenty of seating and windows, unique but tasty espresso drinks, quiet, large tables"
            bad="No pour over choices, mediocre pastries and food, staff isn't too friendly, spotty wifi"
            rating="7 / 10"
            shopImageSource={imgBuroEspresso} />

          <PlacesPost
            title="French Truck"
            location="Memphis, TN"
            good="Great breakfast and lunch, free internet, quick, great coffee and pour overs, pleasant employees, in an amazing building"
            bad="Can get loud, in an open public building, uncomfortable seating"
            rating="8.5 / 10"
            shopImageSource={imgFrenchTruck} />

          <PlacesPost
            title="Edge Alley"
            location="Memphis, TN"
            good="Amazing food, great atmosphere and interior, quiet, great espresso drinks"
            bad="Very expensive, no free internet, employees are rude at times, drip and pour over coffees aren't great"
            rating="7 / 10"
            shopImageSource={imgEdgeAlley} />

          <PlacesPost
            title="387 Pantry"
            location="Memphis, TN"
            good="Unique (has a store and salon too), great coffee, nice and knowledgeable baristas,
                  great atmosphere, very quiet and doesn't get crowded"
            bad="No food or pastries available, just grocery items"
            rating="7.5 / 10"
            shopImageSource={img387Pantry} />

          <PlacesPost
            title="City and State"
            location="Memphis, TN"
            good="Amazing coffee and espresso drinks, has a boutique in store, employees
                  are very pleasant, outdoor seating, animal friendly"
            bad="Uncomfortable seating, limited food, pastries are pricey"
            rating="8.5 / 10"
            shopImageSource={imgCityAndState} />

          <PlacesPost
            title="Pinewood Social"
            location="Nashville, TN"
            good="Great place for both working and meeting with friends, also a bar and restaurant,
                  has a bowling alley, incredible food, serves Crema coffee"
            bad="Expensive, limited seating for working, usually loud and crowded"
            rating="8.5 / 10"
            shopImageSource={imgPinewood} />

          <PlacesPost
            title="Crema Coffee"
            location="Nashville, TN"
            good="Great interior, awesome branding and packaging, comfortable outside seating, very
                  experienced and knowledgeable baristas"
            bad="Feels small and crammed, not really for working, usually a long wait"
            rating="7.5 / 10"
            shopImageSource={imgCrema} />

          <PlacesPost
            title="Réveille Coffee"
            location="San Francisco, CA"
            good="One of the most beautiful coffee shops I've seen, wonderful branding, in a
                  great area, great pastries, doesn't get crowded"
            bad="Pretty expensive, outlets are sparse, only food they have is pastries"
            rating="9 / 10"
            shopImageSource={imgReveille} />

          <PlacesPost
            title="Mazarine Coffee"
            location="San Francisco, CA"
            good="Modern interior, great overall branding and design, fast service, unique food,
                  decent coffee and food variety"
            bad="Very loud and crowded, expensive for the quality they provide, food is a bit too
                  exotic for my taste"
            rating="8 / 10"
            shopImageSource={imgMazarine} />

          <PlacesPost
            title="Sightglass"
            location="San Francisco, CA"
            good="Pastries are amazing, great care for their coffee brewing, employees
                  are very kind and helpful, outlets everywhere"
            bad="Not much seating, very crowded if you come in at the wrong time, espresso drinks
                 aren't very good"
            rating="8.5 / 10"
            shopImageSource={imgSightglass} />

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
            title="The Mud House"
            location="Saint Louis, MO"
            good="Really good food, homey feeling, has both breakfast and lunch, great for working"
            bad="Not much seating, gets crowded on weekends because the food, coffee isn't too great"
            rating="7.5 / 10"
            shopImageSource={imgMudHouse} />

          <PlacesPost
            title="Sump Coffee"
            location="Saint Louis, MO"
            good="Awesome space, great coffee, they roast their own beans, awesome branding, very open
                work area"
            bad="No food (from the time I last went) and hard to find plugs"
            rating="7 / 10"
            shopImageSource={imgSump} />

          <PlacesPost
            title="Bond Coffee"
            location="Nashville, TN"
            good="Great coffee both black and espresso, doesn't get crowded, great lighting, has
                  lunch and ice cream"
            bad="Not much seating, tables are very small, food isn't great, limited selection on
                  food and drinks"
            rating="7 / 10"
            shopImageSource={imgBond} />

          <PlacesPost
            title="Barista Parlor GT"
            location="Nashville, TN"
            good="Great ambiance, beautiful interior, usually quiet, incredible coffee and food,
                  local-made pastries, a lot of seating"
            bad="Baristas can be stuck up sometimes, everything is pretty expensive, outlets are
                 hard to come by"
            rating="8.5 / 10"
            shopImageSource={imgBPGT} />

          <PlacesPost
            title="Barista Parlor GS"
            location="Nashville, TN"
            good="Amazing interior and ambiance, great food and coffee, really nice and skilled
                  baristas, local pastries"
            bad="Almost impossible to find an outlet, music isn't great and usually too loud, gets
                 very crowded"
            rating="9 / 10"
            shopImageSource={imgBPGS} />

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
