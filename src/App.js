import React from 'react';
import Sidebar from './component/sidebar'
import Introduction from './component/Introduction'
import About from './component/about'
import Timeline from './component/timeline';
import Projects from './component/projects';
import Contact from './component/contact'
import Education from './component/education';
import TerminalCustom from './component/terminal'



function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
        </div>
        <div id="colorlib-main">
          <Introduction />
          <TerminalCustom />
          <About />
          <Timeline />
          <Education />
          <Projects />
          <Contact />
          <TerminalCustom />
      	</div>
      </div>
  );
}

export default App;
