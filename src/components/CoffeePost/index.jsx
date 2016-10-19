import React, { Component } from 'react';

class CoffeePost extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    coffee: React.PropTypes.string,
    tasteNotes: React.PropTypes.string,
    rating: React.PropTypes.string,
    readLink: React.PropTypes.string,
    coffeeImageSource: React.PropTypes.string
  };

  render() {
    const {
      title,
      coffee,
      tasteNotes,
      rating,
      readLink,
      coffeeImageSource } = this.props;

    return (
      <div>
        <div className="w-50-l w-80-m w-100 fl-l">
          <img className="relative z-1" src={coffeeImageSource} alt="Coffee" />
          <div className="relative z-max info-margin bg-white ph4 pv3 w-80 center">
            <div>
              <h1 className="biorhyme fw3 lh-title mb2">{title}</h1>
              <span className="courier ttu mt0 mb2 dib black-60 f5">{coffee}</span>
            </div>
            <div>
              <h3 className="courier bold black mb1 f5">Taste Notes</h3>
              <p className="courier black-60 lh-copy mt0 mb2 f5">{tasteNotes}</p>
            </div>
            <div className="cf">
              <div className="fl">
                <h3 className="courier fw4 ttu mb2 dib black-60 f5">Rating</h3>
                <p className="biorhyme fw7 mt0 mb2">{rating}</p>
              </div>
              <div className="fr-l fl">
                <a className="link" href={readLink}>
                  <h2 className="biorhyme black f4 dim pt3">Read Review</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeePost;
