import React, { Component } from 'react';

class Banner extends Component {
  static propTypes = {
    bannerImageSource: React.PropTypes.string.isRequired
  };

  render() {
    const { bannerImageSource } = this.props;
    
    return (
      <div>
        <div className="w-90-ns w-100 pv5-ns center">
          <img className="w-100" src={bannerImageSource} alt="Banner" />
        </div>
      </div>
    );
  }
}

export default Banner;
