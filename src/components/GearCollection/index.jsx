import React, { Component } from 'react';

import GearPost from '../GearPost';

class GearCollection extends Component {
  render() {

    const imgBurrHand =    require('../../img/gear/burr-hand-grinder.jpg');

    return (
      <div className="w-90-ns w-100 pv4 center cf">
        <div className="content-end flex flex-wrap">
          <GearPost
            productLink="https://www.amazon.com/gp/product/B008YK3IUM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008YK3IUM&linkCode=as2&tag=shodro-20&linkId=67beb40a1f298c896fe0ba9723e342ec"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Example description goes here, please write something here"
            productPrice="$30" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B008YK3IUM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008YK3IUM&linkCode=as2&tag=shodro-20&linkId=67beb40a1f298c896fe0ba9723e342ec"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Example description goes here, please write something here"
            productPrice="$30" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B008YK3IUM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008YK3IUM&linkCode=as2&tag=shodro-20&linkId=67beb40a1f298c896fe0ba9723e342ec"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Example description goes here, please write something here"
            productPrice="$30" />
          <GearPost
            productLink="https://www.amazon.com/gp/product/B008YK3IUM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008YK3IUM&linkCode=as2&tag=shodro-20&linkId=67beb40a1f298c896fe0ba9723e342ec"
            productImage={imgBurrHand}
            productName="Burr Hand Grinder"
            productDescription="Example description goes here, please write something here"
            productPrice="$30" />
        </div>
      </div>
    );
  }
}

export default GearCollection;
