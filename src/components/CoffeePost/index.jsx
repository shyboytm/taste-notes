import React, { Component } from 'react';

class CoffeePost extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    coffee: React.PropTypes.string.isRequired,
    tasteNotes: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    thoughts: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    coffeeImageSource: React.PropTypes.string.isRequired
  };

  render() {
    const {
      title,
      coffee,
      tasteNotes,
      location,
      thoughts,
      rating,
      coffeeImageSource } = this.props;

    return (
      <div className="items-start w-50-l w-80-m w-100 ph3-l mb5 mh0-l center relative">
        <img className="relative z-1 br2" src={coffeeImageSource} alt="Coffee Bag Staged Atmosphere" />
        <div className="relative z-max info-margin bg-white ph4 pv3 w-80 center">
          <div>
            <h1 className="biorhyme fw3 lh-title mb2 mt3 f2-ns f3">{title}</h1>
            <h2 className="space-mono tracked ttu mt0 mb3 dib black-30 f5 lh-copy">{coffee}</h2>
          </div>
          <div className="cf">
            <div className="fl bb b--black-10 mb4">
              <h3 className="biorhyme bold black mb1 f5">Taste Notes</h3>
              <p className="space-mono black-60 lh-copy mt0 mb3 f5">{tasteNotes}</p>
              <h3 className="biorhyme bold black mb1 f5">Location</h3>
              <p className="space-mono black-60 lh-copy mt0 mb3 f5">{location}</p>
              <h3 className="biorhyme bold black mb1 f5">Thoughts</h3>
              <p className="space-mono black-60 lh-copy mt0 mb4 f5-ns f6">{thoughts}</p>
            </div>
            <div className="w-100 tc">
              <h3 className="space-mono tracked ttu mb2 black-30 f5">Rating</h3>
              <h4 className="biorhyme fw3 mt0 mb2 red f2">{rating}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeePost;
