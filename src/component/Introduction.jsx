import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/AdobeStock_317396428.jpeg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <div className="text-center">
                          <h1 style={{color: 'white'}}>Soufian Lagnaoui</h1><br></br>
                          <h2 style={{color: 'white'}}>Senior Software Engineer</h2>
                          <p><a className="btn btn-primary" href="https://docs.google.com/document/d/1OHtm1pSWmEYcZPO-9JZ1GYzTPed-lfhL-3ZUHTE3kVU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Download My Resume<i className="icon-download4" /></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
