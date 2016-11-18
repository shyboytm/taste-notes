import React, { Component } from 'react';

class GearPost extends Component {
  render() {
    return (
      <div className="items-start w-25-l w-50-m w-100 ph3 pv2 mb3 center relative">
        <div className="content-end fl">
          <div className="br2 bg-white shadow-custom fl">
            <a  href="http://sogol.co/logos/leaf-branch/leaf-branch.html"
              className="ph2 ph0-ns link db">
              <div className="pa3 cf w-100">
                {/* <img src="logos/leaf-branch/leaf-branch-cover.jpg"
                className="w-100" /> */}
                <h3 className="biorhyme f4 mt0 black lh-title fw5">Leaf Branch</h3>
                <p className="space-mono mt1 mb1 f6 fw4 black-60 lh-copy">
                  Organic, ease-of-mind, peaceful, growth, humility
                </p>
              </div>
              <div className="ph3 pb3 w-100 tl">
                <span className="f6 dim red no-underline dib">See Details →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GearPost;
