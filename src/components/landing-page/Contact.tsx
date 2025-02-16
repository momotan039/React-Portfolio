
function Contact() {
    const sendMail=()=>{
        event?.preventDefault();
        const recipient = document.querySelector<HTMLInputElement>('#contact input#email')?.value;
        const subject = document.querySelector<HTMLInputElement>('#contact input#subject')?.value||'';
        const body = document.querySelector<HTMLTextAreaElement>('#contact textarea#message')?.value||'';
        window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
  return (
    <section id="contact" className="contact-section container">
                  <h1 className="title">Contanct Me</h1>
                  <div className="parent">
                    <div className="keep-in-touch">
                        <h1 data-aos='fade-down-right'>Get in touch via mail</h1>
                        <form onSubmit={sendMail}>
                           <div data-aos='zoom-out-right'>
                           <div className="center">
                                <input disabled  type="email" id="email" placeholder="Email" value={'momotaha039@gmail.com'}/>
                            </div>
                            <div className="center">
                                <input required id="subject" placeholder="Subject" type="text"/>
                            </div>
                            <textarea required id="message" placeholder="Message" cols={30} rows={10}></textarea>
                           </div>
                            <input data-aos='zoom-out-right' className="btn" type="submit" value="Send Message"/>
                        </form>
                    </div>
                    <hr/>
                    <div data-aos='fade-up-right' className="contacts">
                        <a target="_blank" href="https://github.com/momotan039">
                            <i className="fab fa-github-alt"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/mohammed-taha-07141422b/">
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a target="_blank" href="https://www.upwork.com/freelancers/mohammed039">
                            <i className="fa-brands fa-square-upwork"></i>
                        </a>
                        
                    </div>
                  </div>
                {/* <ArrowLinks elementId='#about'/> */}
            </section>
  )
}

export default Contact