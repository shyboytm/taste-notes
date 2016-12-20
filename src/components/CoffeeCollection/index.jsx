import React, { Component } from 'react';

import CoffeePost from '../CoffeePost'

class Coffee extends Component {
  render() {

    const imgKaratina =     require('../../img/kenya-karatina.jpg');
    const imgHermosa  =     require('../../img/vista-hermosa.jpg');
    const imgColinas  =     require('../../img/las-colinas.jpg');
    const imgPeaberry =     require('../../img/hakimson-estate-peaberry.jpg');
    const imgLimu =         require('../../img/limu-ethiopia.jpg');
    const imgNacimiento =   require('../../img/nacimiento-coffee.jpg');
    const imgCelebration =  require('../../img/celebration-blend.jpg');

    return (
      <div className="w-90-ns w-100 pv4-ns center cf">
        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Celebration Blend, 22nd Edition"
            coffee="Intelligentsia"
            tasteNotes="Apple Cider, Red Grapefruit, Kiwi"
            location="Ethiopia, Kenya, Colombia"
            thoughts="Intelligentsia has a celebration blend each year, this one being the 22nd
                      year. Interesting enough, they use multiple locations for these beans to provid
                      a more diverse and flavorful blend. True to this, I enjoyed this roast and found
                      it to be surprisingly different than roasts I've had before. I'm definitely going
                      to make it a tradition to get this roast each year, I recommend you do the same!"
            rating="8.5 / 10"
            coffeeImageSource={imgCelebration} />

        <CoffeePost
          title="Nacimiento"
          coffee="Jobneel Caceres Dios"
          tasteNotes="Bourbon, Chocolate, Cherries, Wine"
          location="Honduras"
          thoughts="I was really excited to try this roast because it comes from the 2016 Nordic
                    roaster of the year, Tim Wendelboe. The roast did not dissapoint with a light
                    chocolate and cherry taste, followed by a bright, nutty aftertaste. One of the
                    best roasts I've had to date."
          rating="9 / 10"
          coffeeImageSource={imgNacimiento} />
        </div>

        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Limu Ethiopia"
            coffee="Commonwealth"
            tasteNotes="Raspberry, Black Tea, Brown Sugar, Floral"
            location="Ethiopia"
            thoughts="Overall an extremely balanced roast. The first taste is sweet, accompanied by a
                      slight taste of salt and black tea. The ending and aftertaste bring the raspberry
                      and floral taste notes out in a very pleasing manner."
            rating="8 / 10"
            coffeeImageSource={imgLimu} />

          <CoffeePost
            title="Kenya Karatina AA"
            coffee="Réveille Coffee Co."
            tasteNotes="Strawberry, Rosé, Pomegranate"
            location="Kenya"
            thoughts="Really great sweetness to the coffee but had an overwhelmingly sweet aftertaste.
                      While it makes sense from the taste notes, the roast did not feel balanced. The
                      coffee had an incredible smell from the grind to the actual brew."
            rating="7 / 10"
            coffeeImageSource={imgKaratina} />
        </div>

        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Vista Hermosa"
            coffee="Sweet Bloom"
            tasteNotes="Red Plum, White Grape, Brown Sugar"
            location="Guatemala"
            thoughts="Really bright and sweet taste overall with a great aftertaste.
                      Might be a bit too sweet for most coffee drinkers but I'm usually
                      a fan of sweeter and lighter roasts."
            rating="8.5 / 10"
            coffeeImageSource={imgHermosa} />

          <CoffeePost
            title="Las Colinas"
            coffee="George Howell Coffee"
            tasteNotes="Passion Fruit, Chocolate, Black Tea"
            location="Nicaragua"
            thoughts="Sweet chocolate taste in accordance with the taste notes.
                      This roast had a darker tasting aftertaste but nothing too unexpected.
                      Really enjoyed this coffee after having never heard of George Howell Coffee,
                      would definitely recommend."
            rating="7.5 / 10"
            coffeeImageSource={imgColinas} />

          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            location="Kenya"
            thoughts="One of my favorite roasts I've had so far. This was a limited edition
                      release from Intelligentsia and did not dissapoint. I was able to get
                      the last bag from my local shop and loved the balanced taste this roast
                      provided. I enjoyed soft sweetness and light aftertaste despite the
                      intense sound of the taste notes listed."
            rating="9 / 10"
            coffeeImageSource={imgPeaberry} />
        </div>

        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="Hakimson Estate Peaberry"
            coffee="Intelligentsia"
            tasteNotes="Tart Cherry, Limeade, Papaya"
            location="Kenya"
            thoughts="One of my favorite roasts I've had so far. This was a limited edition
                      release from Intelligentsia and did not dissapoint. I was able to get
                      the last bag from my local shop and loved the balanced taste this roast
                      provided. I enjoyed soft sweetness and light aftertaste despite the
                      intense sound of the taste notes listed."
            rating="9 / 10"
            coffeeImageSource={imgPeaberry} />
        </div>
      </div>
    );
  }
}

export default Coffee;
