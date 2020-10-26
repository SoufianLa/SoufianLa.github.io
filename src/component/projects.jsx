import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/13.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Thirteen (Backend)</a></h3>
											<span>13 (Thirteen) is an original exciting text messaging app that is focused on connecting the world together while promoting transparency and sharing true opinions between its users.</span>
											<span></span>
                                            <p className="icon detail">
												<span><a href="https://play.google.com/store/apps/details?id=com.thirteen"><i className="icon-eye" />details</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

                            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/turf.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Turfs (Backend)</a></h3>
											<span>Chat, Ask Questions and Provide advise to people around you. Turfs is an app that allows you to navigate a map and chat with others near your point of interest (Turfs). Turfs could be restaurants, cafes, hospitals, etc.</span>
											<p className="icon">
												<span><a href="https://play.google.com/store/apps/details?id=com.rt.turf&amp;hl=en"><i className="icon-eye" /> details</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
                            </div>
                            <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/f.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Fenders (Backend)</a></h3>
											<span>Fenders is an app for the car owner community, which provides a forum for users in each category to exchange experiences with each other. The application also offers the possibility of organizing events for car owners.</span>
											<p className="icon">
												<span><a href="https://play.google.com/store/apps/details?id=com.revotrends.eliteswap"><i className="icon-eye" /> details</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>


							<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/byn.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="">Bayan (Backend)</a></h3>
											<span>With the Bayan app, you can stay informed of all events and alerts related to your area. These alerts may be issued by government agencies, bodies, or private entities. For example, you may receive alerts about weather, traffic, or important or emergency government announcements related to your area.</span>
											<p className="icon">
												<span><a href="https://play.google.com/store/apps/details?id=com.revotrends.eliteswap"><i className="icon-eye" /> details</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>

                            </div>
                            <div className="row">
                                
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/chefy.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Cheify (Backend)</a></h3>
											<span>Coming very soon</span>
											<p className="icon">
												<span><a href="#"><i className="icon-eye" /> details</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/orange.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Orange et Moi (Backend)</a></h3>
											<span>Orange et moi, is an app that let you manage all your mobile operations, internet and landline.
                                                  It allows you to track your consumption, pay your bills, but also to recharge your number and take advantage of many customer benefits.</span>
											<p className="icon">
												<span><a href="https://play.google.com/store/apps/details?id=com.orange.meditel.mediteletmoi"><i className="icon-eye" /> details</a></span>
											</p>
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
