import React, { Component } from 'react';

class CoffeePost extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    coffee: React.PropTypes.string.isRequired,
    tasteNotes: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    thoughts: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string.isRequired,
    readLink: React.PropTypes.string.isRequired,
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
      readLink,
      coffeeImageSource } = this.props;

    return (
      <div>
        <div className="w-50-l w-80-m w-100 fl-l ph3-l mb4 center">
          <img className="relative z-1" src={coffeeImageSource} alt="Coffee" />
          <div className="relative z-max info-margin bg-white ph4 pv3 w-80 center">
            <div>
              <h1 className="biorhyme fw3 lh-title mb2 mt3 f2-ns f3">{title}</h1>
              <span className="space-mono tracked ttu mt0 mb2 dib black-60 f5">{coffee}</span>
            </div>
            <div className="cf">
              <div className="fl">
                <h3 className="space-mono bold black mb1 f5">Taste Notes</h3>
                <p className="space-mono black-60 lh-copy mt0 mb2 f5">{tasteNotes}</p>
                <h3 className="space-mono bold black mb1 f5">Location</h3>
                <p className="space-mono black-60 lh-copy mt0 mb2 f5">{location}</p>
                <h3 className="space-mono bold black mb1 f5">Thoughts</h3>
                <p className="space-mono black-60 lh-copy mt0 mb2 f5">{thoughts}</p>
              </div>
              <div className="w-100 fr">
                <h3 className="tr space-mono fw4 tracked ttu mb2 black-60 f5">Rating</h3>
                <p className="tr biorhyme fw7 mt0 mb2 red f4">{rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeePost;
