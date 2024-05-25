
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
                        <h1>Get in touch</h1>
                        <form onSubmit={sendMail}>
                            <div className="top">
                                <input required placeholder="FirstName" type="text"/>
                                <input required placeholder="LastName" type="text"/>
                            </div>
                            <div className="center">
                                <input required type="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="center">
                                <input required id="subject" placeholder="Subject" type="text"/>
                            </div>
                            <textarea required id="message" placeholder="Message" cols={30} rows={10}></textarea>
                            <input className="btn" type="submit" value="Send Message"/>
                        </form>
                    </div>
                    <hr/>
                    <div className="contacts">
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