import React, { Component } from 'react';

import GearPost from '../GearPost';

class GearCollection extends Component {
  render() {

    const imgBurrHand =    require('../../img/gear/burr-hand-grinder.jpg');
    const imgChemex3  =    require('../../img/gear/chemex-3-cup.jpg');
    const imgChemex8  =    require('../../img/gear/chemex-8-cup.jpg');
    const imgFilters  =    require('../../img/gear/chemex-filters.jpg');
    const imgScale    =    require('../../img/gear/food-scale-steel.jpg');
    const imgOxo      =    require('../../img/gear/oxo-electric-grinder.jpg');
    const imgFellow   =    require('../../img/gear/fellow-stagg-kettle.jpg');
    const imgSteel    =    require('../../img/gear/stainless-steel-mugs.jpg');

    return (
      <div className="w-90-ns w-100 pv4 center cf">
        <div className="content-end flex flex-wrap">
          <GearPost
            productLink="http://amzn.to/2wfnE0D"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Easy and cheap way to freshly ground your coffee beans"
            productPrice="$30" />
          <GearPost
            productLink="http://amzn.to/2vAmLTp"
            productImage={imgChemex3}
            productName="Chemex 3-Cup"
            productDescription="Container for the pour-over technique I use"
            productPrice="$36" />
          <GearPost
            productLink="http://amzn.to/2urPMfd"
            productImage={imgChemex8}
            productName="Chemex 8-Cup"
            productDescription="Larger container for the pour-over technique I use"
            productPrice="$42" />
          <GearPost
            productLink="http://amzn.to/2vACPEC"
            productImage={imgFilters}
            productName="100 Chemex Filters"
            productDescription="Container for your ground coffee inside the Chemex"
            productPrice="$13" />
          <GearPost
            productLink="http://amzn.to/2v4GadU"
            productImage={imgScale}
            productName="Etekcity Scale"
            productDescription="For weighing coffee for grinding and while brewing"
            productPrice="$13" />
          <GearPost
            productLink="http://amzn.to/2vpF9hl"
            productImage={imgOxo}
            productName="OXO Electric Grinder"
            productDescription="An easier, more efficient, and better way to grind coffee"
            productPrice="$149" />
          <GearPost
            productLink="http://amzn.to/2vpK69P"
            productImage={imgFellow}
            productName="Fellow Stagg Kettle"
            productDescription="A beautiful kettle for boiling water and brewing"
            productPrice="$79" />
          <GearPost
            productLink="http://amzn.to/2wf7uo0"
            productImage={imgSteel}
            productName="Steel Mugs Set"
            productDescription="Simple and stylish way to drink your coffee"
            productPrice="$24" />
        </div>
      </div>
    );
  }
}

export default GearCollection;
