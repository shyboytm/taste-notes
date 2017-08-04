import React, { Component } from 'react';

import Banner from '../Banner';
import Footer from '../Footer';
import Header from '../Header';

class About extends Component {
  render() {

    const aboutImg      = require('../../img/about-banner.jpg');
    const imgAboutLeft  = require('../../img/about-left.png');
    const imgAboutRight = require('../../img/about-right.png');

    return (
      <div>
        <Header />
        <div className="flex-l db w-90-ns w-80 pv4 center">
          <div className="flex-auto flex-basis pr4-l">
            <h2 className="flex-l db mv4 tl-l tc f1-ns f2 biorhyme fw3 red">About Taste Notes</h2>
            <div className="flex-l db flex-column pv3-ns pv1 center">
              <p className="mt0 space-mono lh-copy black b">
                Hey! My name is Dennis Cortes.
              </p>
              <p className="space-mono lh-copy black-60">
                Amongst a couple other cliché designer traits, I love coffee and the craft
                and culture behind it. I enjoy making my own coffee at home and experimenting
                with different roasts and brewing methods. Over time I've wanted to keep a
                record of coffee shops, roasts, brewing methods, and tools I try out.
              </p>
              <p className="space-mono lh-copy black-60">
                Hence, Taste Notes was born. A little side project for me to update and keep
                memories of my coffee experiences and preferences. This project is mainly for
                myself, but I love seeing people enjoy this site and share their love for coffee.
              </p>
              <p className="mb5 space-mono lh-copy black-60">
                If you'd like to support the site, pick up some coffee tools from the Gear page!
              </p>
            </div>
          </div>
          <div className="flex-auto pl4-l mv4-l mv3">
            <img className="flex-auto" src={imgAboutLeft} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
