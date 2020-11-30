import React, {Component} from 'react';
import Terminal from 'terminal-in-react';


// https://www.npmjs.com/package/terminal-in-react
export default class TerminalCustom extends Component {

    constructor(props) {
        super(props);
        this.state = require('./../utils/data.json');
      }
    render() {
        return (

            <div>
                <section className="colorlib-terminal" data-section="terminal">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{
          height: "100vh"
        }}>
                                <Terminal
                                    promptSymbol='root@soufianla:~#'
                                    startState='maximised'
                                    color='#2c98f0'
                                    backgroundColor='black'
                                    barColor='black'
                                    style={{fontWeight: "bold", fontSize: "1em"}}
                                    commands={{
                                        'resume': () => window.open(this.state.resume.url, '_blank'),
                                        'whoami': () => this.state.whoami.msg,
                                        'education': () => this.state.education.msg,
                                        'skills': () => this.state.skills.msg,
                                        'experiences': () => this.state.experiences.msg,
                                        'contact': () => this.state.contact.msg
                                    }}
                                    descriptions={{
                                        'resume': this.state.resume.desc,
                                        'whoami': this.state.whoami.desc,
                                        'education':this.state.education.desc,
                                        'skills':this.state.skills.desc,
                                        'experiences':this.state.experiences.desc,
                                        'contact': this.state.contact.desc,
                                         color: false,
                                         show: false
                                    }}
                                    msg='Oops wait do you like command lines ? this made for you ! do not need to scroll down ! type "help" for more informations.'
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}