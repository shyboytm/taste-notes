import React, { Component } from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import Header from '../Header';

class Method extends Component {
  render() {

    const methodImg = require('../../img/method-banner.jpg');

    return (
      <div>
        <Header />
        <div className="flex-l db w-90-ns w-80 pv4 center">
          <div className="flex-auto flex-basis pr4-l">
            <h2 className="flex-l db mv4 tl-l tc f1-ns f2 biorhyme fw3 red">Preferred Brewing Method</h2>
            <div className="flex-l db flex-column pv3-ns pv1 center">
            <p className="mb5 f4 space-mono lh-copy black-60">
              This is my personal favorite way to brew of all the different methods
              I have tried so far. I learned this method from Blue Bottle Coffee.
              I prefer pour over coffee using a Chemex. If you're interested in any
              of the tools I use, make sure to check out the Gear page. Anyways, let's
              get right into it.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 1
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Bring at least 600 grams (20 oz) of water to a boil.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 2
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Grind 23 grams of coffee (3 tbsp) to a coarseness resembling sea salt.
              I like lighter roasts of coffee for this, if you are using a darker roast,
              I recommend 30 grams of coffee instead.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 3
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Place a filter in the dripper. Pour half of the hot water over the empty
              filter to remove any “papery” taste and warm your dripper. Discard rinse water.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 4
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Add the ground coffee to the filter and gently tap it to level the surface of
              the grounds. Place the brewer on a carafe or cup, place this entire set-up onto
              a digital scale, and set it to zero.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 5
            </h4>
            <p className="mb3 f4 space-mono lh-copy black-60">
              There will be four pours total for this coffee preparation. This is the first,
              and the most magical, because it is when you will see the coffee “bloom.” As
              hot water first hits the grounds, Co2 is released creating a blossoming
              effect—the grounds will rise up en masse.
            </p>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Start a timer. Begin pouring water slowly over the coffee, starting at the
              outer rim and moving in a steady spiral toward the center of the grounds.
              Stop pouring when the scale reaches 60 grams. Make sure all the grounds are
              saturated, even if you need to add a little water. The pour should take about
              15 seconds. Give the coffee an additional 30 seconds to drip before moving on
              to the second pour.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 6
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Starting in the center of the grounds, pour in a steady spiral toward the outer
              edge and then back toward the center. Add roughly 90 grams, bringing the total
              to 150 grams. The goal during this pour is to sink all of the grounds on the
              surface of the bed. This creates a gentle turbulence that “stirs” the coffee,
              allowing water to more evenly extract the grounds. Allow 45–65 seconds to elapse.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 7
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              As the mixture of water and coffee from the second pour drops to the bottom of
              the filter, coming close to the level of the grounds, pour an additional 100
              grams of water using the same pattern as the second pour. This brings the total
              up to 250 grams and should take 15–20 seconds.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 8
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              When the water and coffee from the third pour drops to the bottom of the filter,
              complete your fourth and final pour. Add 100 grams, bringing the total up to
              350 grams of water. This pour should take 20 seconds.
            </p>
            <h4 className="f4 space-mono lh-title black">
              Step 9
            </h4>
            <p className="mb5 f4 space-mono lh-copy black-60">
              Enjoy!
            </p>
            <p className="mb5 f4 space-mono lh-copy black b measure center">
              If you need any of these tools mentioned, check out the Gear page and stock up!
            </p>
            </div>
          </div>
          <div className="flex-auto pl4-l mv4-l mv3">
            <img className="flex-auto" src={methodImg} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Method;
