import React, { Component } from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import Header from '../Header';

class About extends Component {
  render() {

    const aboutImg = require('../../img/about-banner.jpg');

    return (
      <div>
        <Header />
        <Banner bannerImageSource={aboutImg} />
        <div className="w-90-ns w-100 pv4-ns center">
          <h2 className="mv4 tc f1-ns f2 biorhyme fw3">About Taste Notes</h2>
          <div className="pv3-ns pv1 w-60-l w-80-m w-90 center">
            <p className="f4 mt0 space-mono lh-copy black b">
              Hey! My name is Dennis Cortes.
            </p>
            <p className="f4 space-mono lh-copy black-60">
              Amongst a couple other cliché designer traits, I love coffee and the craft
              and culture behind it. I enjoy making my own coffee at home and experimenting
              with different roasts and brewing methods. Over time I've wanted to keep a
              record of coffee shops, roasts, brewing methods, and tools I try out.
            </p>
            <p className="f4 space-mono lh-copy black-60">
              Hence, Taste Notes was born. A little side project for me to update and keep
              memories of my coffee experiences and preferences. This project is mainly for
              myself, but I love seeing people enjoy this site and share their love for coffee.
            </p>
            <p className="mb5 f4 space-mono lh-copy black-60">
              If you'd like to support the site, pick up some coffee tools from the Gear page!
            </p>

            <h4 className="f4 space-mono lh-title black">
              For the tech people:
            </h4>
            <p className="f4 space-mono lh-copy black-60">
              If you're interested, this site is (amateurly) built with:
            </p>
            <ul>
              <li className="lh-copy space-mono f4">React</li>
              <li className="space-mono f4">Tachyons</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
