import React, { Component } from 'react';

class CoffeePost extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    coffee: React.PropTypes.string.isRequired,
    tasteNotes: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    coffeeImageSource: React.PropTypes.string.isRequired
  };

  render() {
    const {
      title,
      location,
      good,
      bad,
      rating,
      shopImageSource } = this.props;

    return (
      <div className="items-start w-50-l w-80-m w-100 ph3-l mb5 mh0-l center relative">
        <img className="relative z-1" src={shopImageSource} alt="Shop" />
        <div className="relative z-max info-margin bg-white ph4 pv3 w-80 center">
          <div>
            <h1 className="biorhyme fw3 lh-title mb2 mt3 f2-ns f3">{title}</h1>
            <span className="space-mono tracked ttu mt0 mb2 dib black-60 f5">{location}</span>
          </div>
          <div className="cf">
            <div className="fl">
              <h3 className="space-mono bold black mb1 f5">The Good</h3>
              <p className="space-mono black-60 lh-copy mt0 mb2 f5">{good}</p>
              <h3 className="space-mono bold black mb1 f5">The Bad</h3>
              <p className="space-mono black-60 lh-copy mt0 mb2 f5">{bad}</p>
            </div>
            <div className="w-100 fr">
              <h3 className="tr space-mono fw4 tracked ttu mb2 black-60 f5">Rating</h3>
              <p className="tr biorhyme fw7 mt0 mb2 red f4">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeePost;
