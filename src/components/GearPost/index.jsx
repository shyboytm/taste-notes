import React, { Component } from 'react';

class GearPost extends Component {
  static propTypes = {
    productLink: React.PropTypes.string.isRequired,
    productImage: React.PropTypes.string.isRequired,
    productDescription: React.PropTypes.string.isRequired,
    productName: React.PropTypes.string.isRequired,
    productPrice: React.PropTypes.string.isRequired,
  };

  render() {

    const {
      productLink,
      productImage,
      productDescription,
      productName,
      productPrice } = this.props;

    return (
      <div className="items-start dim w-25-l w-50-m w-100 ph3 pv2 mb3 center relative">
        <div className="content-end fl">
          <div className="br2 bg-white fl">
            <a  href={productLink} className="ph2 ph0-ns link db">
              <div className="pa3 cf w-100">
                <img src={productImage} alt="Product" className="w-100" />
                <h3 className="biorhyme f4 mt0 black lh-title fw5">{productName}</h3>
                <p className="space-mono mt0 mb2 f6 fw4 black-60 lh-copy">
                  {productDescription}
                </p>
              </div>
              <div className="ph3 mb3 w-100 tl">
                <span className="red b">{productPrice}</span>
                <span className="fr f6 dim red no-underline dib space-mono ttu">See Details →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GearPost;
