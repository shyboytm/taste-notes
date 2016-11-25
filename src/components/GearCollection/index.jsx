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
            productLink="https://www.amazon.com/gp/product/B008YK3IUM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008YK3IUM&linkCode=as2&tag=shodro-20&linkId=67beb40a1f298c896fe0ba9723e342ec"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Easy and cheap way to freshly ground your coffee beans"
            productPrice="$30" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B004BEQFVY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004BEQFVY&linkCode=as2&tag=shodro-20&linkId=c3693b0847f6c3601445c78589784488"
            productImage={imgChemex3}
            productName="Chemex 3-Cup"
            productDescription="Container for the pour-over technique I use"
            productPrice="$36" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B000I1WP7W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000I1WP7W&linkCode=as2&tag=shodro-20&linkId=7346532c8062df1b4867d57691c9032f"
            productImage={imgChemex8}
            productName="Chemex 8-Cup"
            productDescription="Larger container for the pour-over technique I use"
            productPrice="$42" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B0000CF3HB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0000CF3HB&linkCode=as2&tag=shodro-20&linkId=19fced85561a1c508e1ea12325aedb3d"
            productImage={imgFilters}
            productName="100 Chemex Filters"
            productDescription="Container for your ground coffee inside the Chemex"
            productPrice="$13" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B0113UZJE2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0113UZJE2&linkCode=as2&tag=shodro-20&linkId=fd2841e7b5afa42dc76f68416739eb6f"
            productImage={imgScale}
            productName="Etekcity Scale"
            productDescription="For weighing coffee for grinding and while brewing"
            productPrice="$13" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B00YEYKNUK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00YEYKNUK&linkCode=as2&tag=shodro-20&linkId=9be7a1f3de016e5095e6c2d530e3eb80"
            productImage={imgOxo}
            productName="OXO Electric Grinder"
            productDescription="An easier, more efficient, and better way to grind coffee"
            productPrice="$149" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B014UN8LDU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B014UN8LDU&linkCode=as2&tag=shodro-20&linkId=aae8f649b13e5a2e6bb7f36ee4e19b75"
            productImage={imgFellow}
            productName="Fellow Stagg Kettle"
            productDescription="A beautiful kettle for boiling water and brewing"
            productPrice="$79" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B00B5Z7E12/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B5Z7E12&linkCode=as2&tag=shodro-20&linkId=c30baf9d7f49407d44d3928c38984a3c"
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
