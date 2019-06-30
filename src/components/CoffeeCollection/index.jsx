import React, { Component } from 'react';

import CoffeePost from '../CoffeePost'

class Coffee extends Component {
  render() {

    const imgKaratina =         require('../../img/kenya-karatina.jpg');
    const imgHermosa  =         require('../../img/vista-hermosa.jpg');
    const imgColinas  =         require('../../img/las-colinas.jpg');
    const imgPeaberry =         require('../../img/hakimson-estate-peaberry.jpg');
    const imgLimu =             require('../../img/limu-ethiopia.jpg');
    const imgNacimiento =       require('../../img/nacimiento-coffee.jpg');
    const imgCelebration =      require('../../img/celebration-blend.jpg');
    const imgTikur =            require('../../img/tikur-anbessa.jpg');
    const imgMorita =           require('../../img/morita-coffee.jpg');
    const imgLayo =             require('../../img/layo-tiraga-coffee.jpg');
    const imgMaraba =           require('../../img/maraba-coffee.jpg');
    const imgBirembo =          require('../../img/birembo-coffee.jpg');
    const imgSweetheart =       require('../../img/sweetheart.jpg');
    const imgPiramide =         require('../../img/la-piramide.jpg');
    const imgDuromina =         require('../../img/duromina-coffee.png');
    const imgHeleanna =         require('../../img/heleanna-coffee.png');
    const imgBigRiver =         require('../../img/big-river-coffee.jpg');
    const imgHouseBlend =       require('../../img/intelligentsia-house-coffee.jpg');
    const imgDrBeansEthiopia =  require('../../img/dr-beans-coffee.jpg');
    const imgHologram =         require('../../img/hologram-coffee.jpg');
    const imgHunapu =           require('../../img/hunapu-coffee.jpg');
    const imgArabica =          require('../../img/arabica-coffee.jpg');
    const imgSanJacinto =       require('../../img/san-jacinto-coffee.jpg');
    const imgHuehuetenango =    require('../../img/huehuetenango-coffee.jpg');
    const imgKossaGeshe =       require('../../img/kossa-geshe-coffee.jpg');
    const imgDirectTrade =      require('../../img/stumptown-house-coffee.png');

    return (
      <div className="w-90-ns w-100 pv4 center cf">
        <div className="content-end flex flex-wrap">

        <CoffeePost
          title="Direct Trade House"
          coffee="Stumptown Roasters"
          tasteNotes="Candied, Milk Chocolate"
          location="Latin America Blend"
          thoughts="I've always loved Stumptown Roasters for their wonderful branding and finally had a chance
                    to try their coffee for myself. The packaging was beutiful both visually and in hand and smelled wonderful.
                    The roast tasted pretty dark even though they say this is their lightest roast that they offer. The chocolatey
                    flavor had a mix of a slight almond taste and lightened during the aftertaste, making for a very pleasant finisher."
          rating="8 / 10"
          coffeeImageSource={imgDirectTrade} />

          <CoffeePost
            title="Huehuetenango"
            coffee="French Truck Coffee"
            tasteNotes="Toffee, Caramel, Lemon, Lime, Red Apple"
            location="Guatemala"
            thoughts="I was a bit cautious when trying this roast as the last experience I had with French Truck
                      was less than ideal. Luckily this roast was much better than the predecessor I had, despite
                      it being on the darker side of roasts I enjoy. The taste notes provided weren't
                      entirely accurate in my opinion and tasted more earthy and smokey to me. Still a great roast,
                      especially for the low price ($11) as compared to other roasts I've had that I'd consider similar quality."
            rating="7.5 / 10"
            coffeeImageSource={imgHuehuetenango} />

          <CoffeePost
            title="San Jacinto"
            coffee="Phil & Sebastion Coffee Roasters"
            tasteNotes="Red Plum, Coffee Cherry, Chocolate, Bourbon"
            location="Guatemala"
            thoughts="Very light and airy taste with a great balance of sweet, savory, and bitter flavors.
                      As a fan of Bourbon, I was excited to try a roast with this listed on their taste notes.
                      Was very pleased with what this roast offered and looked forward to making this coffee
                      throughout the week that I had it."
            rating="8.5 / 10"
            coffeeImageSource={imgSanJacinto} />

          <CoffeePost
            title="Arabica"
            coffee="Edge Alley"
            tasteNotes="Honeysuckle Lime, Walnut, Eucalyptus"
            location="Thailand"
            thoughts="I try to stay positive during all my reviews but this roast was absolutely terrible.
                      I'm not sure how the creators of this thought it would be okay to sell this coffee but
                      I've never made a worse cup of coffee than with this roast. Tasted of tap water with
                      slight hints of bitter and nutty flavors. Needless to say I don't recommend this roast
                      and will never buy this brand again."
            rating="3 / 10"
            coffeeImageSource={imgArabica} />

          <CoffeePost
            title="Hunapu"
            coffee="Madcap Coffee"
            tasteNotes="Plum, Chocolate, Creamy, Tangerine"
            location="Guatemala"
            thoughts="I've been a long time admirer of Madcap. As a designer, I absolutely love their
                      overall brand from logo to website to packaging. Their coffee lives up to how
                      beautiful their brand is and I think I may have found my new favorite coffee
                      roaster. Unfortunately it's a bit hard to get where I am at but will definitely
                      treat myself to Madcap when I can. This particular roast is one of the best I've
                      had in a long time with an array of amazing flavors from beginning to end. I thoroughly
                      enjoyed the aftertaste of creamy citrus as well that keeps you wanting more. Highly recommend!"
            rating="9.5 / 10"
            coffeeImageSource={imgHunapu} />

          <CoffeePost
            title="Hologram"
            coffee="Counter Culture Coffee"
            tasteNotes="Fruity, Milk Chocolate, Syrupy"
            location="Ethiopia"
            thoughts="I heard a lot of great things about Counter Culture so I was stoked to find
                      this roast locally available. Although a tad too syrupy for my taste, I did
                      enjoy the overall fruity but light taste throughout. The aftertaste really brings
                      out the chocolate flavors with a hint of honey."
            rating="7 / 10"
            coffeeImageSource={imgHologram} />

          <CoffeePost
            title="Dr. Bean's Ethiopia"
            coffee="Dr. Bean's Coffee Roasters"
            tasteNotes="Cherry"
            location="Ethiopia"
            thoughts="Along with the Big River roast I tried a couple weeks ago, I wanted to try other
                      local roasts here in Memphis since my move. Despite the packaging of this coffee,
                      this is actually one of the better roasts I have had. Even though the Taste Notes
                      are minimal to say the least, the taste of this coffee is very unique in a great way.
                      This roast was quite sweet but was pleasant to drink, even alone. Highly recommend if
                      you're looking to try something different from the usual popular companies."
            rating="8.5 / 10"
            coffeeImageSource={imgDrBeansEthiopia} />

          <CoffeePost
            title="House Blend"
            coffee="Intelligentsia"
            tasteNotes="Milk Chocolate, Mandarin, and Apple"
            location="Costa Rica"
            thoughts="Being a big fan of Intelligentsia, I was surpised to find a mediocre roast from them.
                      I really was not a huge fan of this roast but I believe I got an older roast since I
                      bought it from a grocery store instead of the usual coffee shop. Anyways, the roast was
                      way too bitter in my opinion and was pretty difficult to drink by itself."
            rating="6.5 / 10"
            coffeeImageSource={imgHouseBlend} />

          <CoffeePost
            title="Big River"
            coffee="French Truck Coffee"
            tasteNotes="Cream, Chocolate, Toffee, Green Grape"
            location="Colombia"
            thoughts="Having recently moved to Memphis, I was excited to try out some local roasters here.
                      French Truck Coffee happens to be one of those places so I picked up this roast to try.
                      As much as I wanted to enjoy this coffee, it was quite bitter despite the inviting taste
                      notes provided. Luckily I could just dilute the coffee by adding a bit more water during
                      brewing and enjoyed the roast much more then. Definitely a strong overall taste but I did
                      still enjoy the coffee during the week of use."
            rating="6 / 10"
            coffeeImageSource={imgBigRiver} />

          <CoffeePost
            title="Heleanna"
            coffee="Barista Parlor"
            tasteNotes="Orange Blossom Honey, Dates, Papaya"
            location="Kochere, Ethiopia"
            thoughts="If you did not know, Barista Parlor in Nashville happens to be my favorite coffee shop ever.
                      Now living in Memphis, it was a very pleasant surprise to find Barista Parlor's coffee at a local
                      coffee shop here. Almost as good as the packaging, this roast is incredible. I'm not usually a fan
                      of sweeter coffees, but each cup of this coffee I have had has been almost perfect. The blend of
                      flavors in this roast is wonderfully balanced with hints of nutty underflavors and aftertaste."
            rating="9 / 10"
            coffeeImageSource={imgHeleanna} />

          <CoffeePost
            title="Duromina"
            coffee="Sey Coffee"
            tasteNotes="Not Provided"
            location="Ethiopia"
            thoughts="To be completely transparent, what intrigued me to this coffee was it's price. At only $11 as
                      opposed to the usual $20+ I pay for other coffees, I thought it would be worth a try. It was
                      surprisingly better than expected, but the limiting factor being a very dry and bland aftertaste.
                      I usually expect a fill of flavor aftertaste but was underwhelmed and literally left thirsty. I
                      can't complain for $11 though, was definitely worth it."
            rating="7.5 / 10"
            coffeeImageSource={imgDuromina} />

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
