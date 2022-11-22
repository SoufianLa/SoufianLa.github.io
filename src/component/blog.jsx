import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">blog</span>
                                            <h2 className="colorlib-heading">Checkout My Blog by clicking on the picture</h2>
                                            <div style={{backgroundImage: 'url(images/free.png)'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
