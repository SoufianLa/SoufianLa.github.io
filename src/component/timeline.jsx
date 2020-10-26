import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Backend Engineer <span>2019-present</span><br></br><span><a href="http://revotrends.com/">Revotrends</a></span></h2>
                        <p>I have joined Revotrends as a senior Backend Engineer. My major part of the work has been backend development and operations process which makes the mobile apps work with a good conditions</p>
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead software design Engineer <span>2018-2019</span><br></br><span><a href="http://futuretrendz.com">FutureTrendz</a></span></h2>
                        <p> RESPONSIBLE FOR THE BACKEND APPLICATIONS (Conception, Code architecture, Implementation, Code review, Scalability to support high traffic, code deployment, Security & optimization …)
                        </p><p> RESPONSIBLE FOR THE CLOUD ADMINISTRATION IN AWS (designing, implementing, developing and maintaining AWS services and infrastructure )</p>
<p> <b>Tools/languages</b> : Python (Flask), PHP (symfony), NodeJS, GoLang, REST, SWAGGERUI, MARIADB, Mysql, JWT, git, Ansible, Apache2, React JS, AWS (VPC, R53, Load Balancing, EC2, RDS, DynamoDB, S3 ...)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Engineer <span>2016-2018</span><br></br><span><a href="http://www.mobiblanc.com">Mobiblanc</a></span></h2>
                        <p> i was working on some interesting projects most of them was backend for mobile apps.
</p><p> i was member of the team that is responsible for the API/BACKOFFICE mobile & web development.</p>
<p> <b>Tools/languages</b> : PHP (symfony), NodeJS, REST/SOAP, SWAGGERUI, MARIADB, Mysql, Redis, JWT, Guard, git, HTML5/CSS3 ...</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Python Engineer (final technical internship)<span>2016</span><br></br><span><a href="https://www.haca.ma/">LA HACA</a></span></h2>
                        <p> Design and implementation of a remote monitoring web application for audiovisual
operators in python.</p>
<p> <b>Tools/languages</b> : Back-end : (Python, asynchronous Framework Twisted), Database
(SQLITE), Modeling (UML), Environment (Kali-linux), test (pyunit, pytest), Scripting (bash).</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java Developer (Technical internship) <span>2015</span><br></br><span><a href="https://www.t-t.ma/">Technology & telecom</a></span></h2>
                        <p> Implementation and integration of a communication GSM/GPS protocol in a geolocation application (openGTS).</p>
                        <p> <b>Tools/languages</b> : Java, openGTS, eclipse, putty, ubuntu, FM4 Configurator.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
