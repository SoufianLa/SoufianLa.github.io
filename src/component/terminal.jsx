import React, {Component} from 'react';
import Terminal from 'terminal-in-react';


// https://www.npmjs.com/package/terminal-in-react
export default class TerminalCustom extends Component {
    showMsg = () => 'Hello World'

    render() {
        return (

            <div>
                <section className="colorlib-terminal" data-section="terminal">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <Terminal
                                    startState='maximised'
                                    color='#2c98f0'
                                    backgroundColor='black'
                                    barColor='black'
                                    style={{fontWeight: "bold", fontSize: "1em"}}
                                    commands={{
                                        'open-google': () => window.open('https://www.google.com/', '_blank'),
                                        showmsg: this.showMsg,
                                        popup: () => alert('Terminal in React')
                                    }}
                                    descriptions={{
                                        'open-google': 'opens google.com',
                                        showmsg: 'shows a message',
                                        alert: 'alert', popup: 'alert'
                                    }}
                                    msg='Do you like interactive interfaces ? this made for you ! do not need to scroll down ! type help and do the work :) .'
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}