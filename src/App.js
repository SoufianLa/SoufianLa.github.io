import React from 'react';
import Sidebar from './component/sidebar'
import Introduction from './component/Introduction'
import About from './component/about'
import Timeline from './component/timeline';
import Projects from './component/projects';
import Contact from './component/contact'
import Education from './component/education';
import TerminalCustom from './component/terminal'
import Skills from './component/skills'
import Blog from './component/blog';
import Certif from "./component/certif";



function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
        </div>
        <div id="colorlib-main">
          <Introduction />
          <About />
          <TerminalCustom />
          <Skills />
          <Timeline />
          <Education />
          <Projects />
          {/*<Blog />*/}
          {/*<Certif />*/}
          <Contact />
      	</div>
      </div>
  );
}

export default App;
