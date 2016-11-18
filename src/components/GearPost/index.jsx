import React, { Component } from 'react';

class GearPost extends Component {
  render() {
    return (
      <div className="items-start w-50-l w-80-m w-100 ph3-l mb5 mh0-l center relative">
        <div className="content-end fl pa3">
          <div className="br2 bg-white shadow-custom fl">
            <a  href="http://sogol.co/logos/leaf-branch/leaf-branch.html"
              className="ph2 ph0-ns link db">
              <div className="pa3 cf w-100">
                {/* <img src="logos/leaf-branch/leaf-branch-cover.jpg"
                className="w-100" /> */}
              <h3 className="mv3 f4 mb0 black lh-title tc fw5">Leaf Branch</h3>
                <p className="mt1 mb1 f6 fw4 black-60 lh-copy tc">
                  Organic, ease-of-mind, peaceful, growth, humility
                </p>
              </div>
              <div className="pt2 pb4 w-100 tc">
                <span className="f6 br-pill dim s-gold no-underline ba pv2 ph3 dib">See Details →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GearPost;
