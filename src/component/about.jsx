import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am software engineer with IT Engineer's degree, i have begin my career as fullstack engineer in startup company where i got to develop some web apps, backend for mobile apps, then i ve got a passion for Backend side, code architecture, databases, systems, proxies ... i found it it is the most interseting part of the eco-system is is challenging sometimes which gives the chance to solve problems in a clever ways.
                    <p>What i am doing now is developing, scalling, operationg some backend apps for a company in morocco and in my free time i work on some side projects for exploring new technologies in purpose.</p>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-html-five2" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-git" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Databases </h3>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-cloud-storage" />
                </span>
                <div className="desc">
                    <h3>Cloud and system </h3>
                </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
