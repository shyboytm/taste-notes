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
    const imgTikur =        require('../../img/tikur-anbessa.jpg');
    const imgMorita =       require('../../img/morita-coffee.jpg');
    const imgLayo =         require('../../img/layo-tiraga-coffee.jpg');
    const imgMaraba =       require('../../img/maraba-coffee.jpg');
    const imgBirembo =      require('../../img/birembo-coffee.jpg');
    const imgSweetheart =   require('../../img/sweetheart.jpg');
    const imgPiramide =   require('../../img/la-piramide.jpg');

    return (
      <div className="w-90-ns w-100 pv4-ns center cf">
        <div className="content-end flex flex-wrap">
          <CoffeePost
            title="La Piramide"
            coffee="Sump Coffee"
            tasteNotes="Sweet, Orange Blossom, Black Tea"
            location="Colombia"
            thoughts="Wow. I'm drinking this roast as I'm writing this and that's what I have to say for this roast.
                      Such a great and rich taste throughout the cup of coffee. I can't put my finger on exactly why
                      this roast is so great, but I have a feeling the Black Tea and Orange from the taste notes are
                      complimenting each other very well. Would definitely recommend picking this up. And look at that
                      packaging!"
            rating="9.5 / 10"
            coffeeImageSource={imgPiramide} />

          <CoffeePost
            title="Sweetheart"
            coffee="Olympia Coffee"
            tasteNotes="Blackberry, Custard, Citrus"
            location="Kagumoini"
            thoughts="Although not as tasty as the previous Birembo coffee I had, still a decent roast from the folks at Olympia.
                      This roast was a bit dry and the custard from the taste notes felt overpowering to me, sometimes leaving
                      a bitter/sweet taste in my mouth as an aftertaste. I will say the initial taste of the coffee makes up for
                      this though and still tastes great overall."
            rating="7.5 / 10"
            coffeeImageSource={imgSweetheart} />

          <CoffeePost
            title="Birembo"
            coffee="Olympia Coffee"
            tasteNotes="Citrus, Black Tea, Strawberry"
            location="Rwanda"
            thoughts="I wanted to try a new roasting company since I had a bad experience with my usual Sweet Bloom. I
                      hadn't heard of Olympia Coffee roasters but I was pleasantly surprised with this roast. Although
                      on the bitter side of coffee, it had a nice sweetness that quickly takes over any bitterness. The
                      main taste I get from the taste notes is the Black Tea, with a hint of the others in the aftertaste."
            rating="8.5 / 10"
            coffeeImageSource={imgBirembo} />

          <CoffeePost
            title="Maraba"
            coffee="Sweet Bloom"
            tasteNotes="Rosé, Hibiscus Tea, Key Lime, Honey"
            location="Southern Province, Rwanda"
            thoughts="Personally was not a big fan of this roast. I believe it's just because of the specific flavors
                      that aren't my personal favorites including the Rosé and Key Lime tastes. As you may or may not
                      know, I tend to stick more on the tame and savory side of taste notes, so this roast was a bit
                      too sweet for my liking. Definitely not a bad roast by any means, was easy to brew and fun to try."
            rating="7 / 10"
            coffeeImageSource={imgMaraba} />

          <CoffeePost
            title="Layo Tiraga"
            coffee="Jobneel Caceres Dios"
            tasteNotes="Tangerine, Citrus Zest, & Jasmine"
            location="Sidama, Ethiopia"
            thoughts="After loving the Christmas blend from Jobneel Caceres Dios, I had to try one of their
                      non-limited roasts to see if it was as good as their limited ones. While I still really enjoyed
                      this roast, it wasn't up to par with their Christmas blend, understandably so. I will say this
                      roast was a little on the bitter side for me, even after playing with different water to coffee
                      ratios. Definitely going to try another one of their roasts when I get a chance!"
            rating="7.5 / 10"
            coffeeImageSource={imgLayo} />

          <CoffeePost
            title="Morita"
            coffee="Sweet Bloom"
            tasteNotes="Brownbutter, Creme Brulee, Honeycrisp"
            location="Baroida Plantation"
            thoughts="Sweet Bloom is slowly but surely becoming one of my favorite roasting companies
                      as of lately. Despite the interesting taste notes described for this coffee,
                      I found this roast to be quite tame. With a balance of sweetness in creme brulee and
                      honeycrisp, and a contrasting saltiness from brownbutter. Would definitely recommend."
            rating="8 / 10"
            coffeeImageSource={imgMorita} />

          <CoffeePost
            title="Tikur Anbessa"
            coffee="Intelligentsia"
            tasteNotes="Honeysuckle, Kiwi, Ripe Pear"
            location="Ethiopia"
            thoughts="Intelligentsia roasts are usually my favorite, but I was pretty dissapointed
                      with this specific roast. Although the Taste Notes were accurate, every cup
                      I had from this batch was overly bitter compared to what I am used to. I will
                      say however, the first taste of each sip was great and right on point with the
                      taste notes provided."
            rating="6.5 / 10"
            coffeeImageSource={imgTikur} />

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
      </div>
    );
  }
}

export default Coffee;
