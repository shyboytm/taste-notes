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
          <img className="z-max" src={coffeeImageSource} alt="Coffee" />
          <div className="z-1 info-margin bg-white pa2 w-80 center">
            <div>
              <h1 className="biorhyme fw3">{title}</h1>
              <span>{coffee}</span>
            </div>
            <div>
              <h3>Taste Notes</h3>
              <p>{tasteNotes}</p>
            </div>
            <div>
              <h3>Rating</h3>
              <p>{rating}</p>
            </div>
            <div>
              <a href={readLink}>
                <h2>Read Review</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeePost;
