import React, {Component} from 'react'
import{ init, send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    init("user_SMhzp9adhdluZ4yS1R8gw");
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event){
    this.setState({email: event.target.value})
  }
  onSubjectChange(event){
    this.setState({subject: event.target.value})
  }
  onMessageChange(event){
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.sendFeedback({message: this.state.message, name: this.state.name, reply_to: this.state.email, subject: this.state.subject})
    this.resetForm();
    
  }
  resetForm(){
    this.setState({"email":"", "message":"", "name":"","subject":""});
  }
  sendFeedback (variables) {
    const serviceId = 'service_6smjnlo';
    const templateId = 'template_n19gc9s';
    send(
      serviceId, templateId,
      variables
      ).then(res => {
        toast.info('🤠 Thank for your contact i\'ll get back to ASAP ! ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      .catch(err => {
        toast.error('⚠ Sorry, try again later ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
      })
    }
   
    render () {
        return (
            <div>
              <div className="row">
                <ToastContainer
                 position="top-center"
                 autoClose={5000}
                 hideProgressBar={false}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                 />
                 </div>
                <section className="colorlib-contact" data-section="contact">
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">Get in Touch</span>
        <h2 className="colorlib-heading">Contact</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-5">
        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
          <div className="colorlib-icon">
            <i className="icon-mail" />
          </div>
          <div className="colorlib-text">
            <p><a href="mailto:so.lagnaoui@gmail.com">so.lagnaoui@gmail.com</a></p>
          </div>
        </div>
        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
          <div className="colorlib-icon">
            <i className="icon-home" />
          </div>
          <div className="colorlib-text">
            <p>Alsace Lorraine, Casablanca, Morocco</p>
          </div>
        </div>
        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
          <div className="colorlib-icon">
            <i className="icon-phone" />
          </div>
          <div className="colorlib-text">
            <p><a href="tel://">+212 605813180</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-md-push-1">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"  value={this.state.name}  onChange={this.onNameChange.bind(this)} required={true} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" value={this.state.email}  onChange={this.onEmailChange.bind(this)} required={true} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required={true}/>
              </div>
              <div className="form-group">
                <textarea name id="message" cols={30} rows={7} className="form-control" placeholder="Message" value={this.state.message}  onChange={this.onMessageChange.bind(this)} required={true}/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
              </div>
            </form>
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