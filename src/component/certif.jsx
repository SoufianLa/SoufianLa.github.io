import React, {Component} from 'react'

export default class Certif extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-certif" data-section="certif">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">blog</span>
                                            <h2 className="colorlib-heading">Certifications</h2>
                                            <span><a href="https://www.hackerrank.com/certificates/ac75f9265086" target="_blank"><img style={{height:"120px", margin:"20px"}} src="images/hackerrank.jpeg"></img></a></span>
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