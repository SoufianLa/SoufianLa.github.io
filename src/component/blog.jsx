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
                                            <h2 className="colorlib-heading">Checkout My Websites by clicking on the pictures</h2>
                                            <span><a href="http://free-tech.blog"><img style={{width:"280px", height:"120px", margin:"20px"}} src="images/free.png"></img></a></span>
                                            <span><a href="http://212gaming.com"><img style={{width:"280px", height:"120px", margin:"20px"}} src="images/212gaming.png"/></a></span>
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
