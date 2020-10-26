import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
            
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <span class="position">Software Engineer/CTO as Service 🚀</span>
              <hr></hr>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://api.whatsapp.com/send/?phone=212605813180&text&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="icon-whatsapp" /></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="tel:+212605813180" target="_blank" rel="noopener noreferrer"><i className="icon-phone" /></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></div>
              <div style={{display: 'inline', marginRight: '10px'}}><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></div>
            </div>
            <hr></hr>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul style={{textAlign: 'left', marginLeft: '34%'}}>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p>
                  <small>
                  Made with ❤️ ☕ 💻 ⚛️<br></br>
                  Credit to <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                  </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}