import React from 'react'

function Skills() {
  return (
    <section id="skills" className="skills-section container">
                
    <h1 className="title">Skills</h1>
    {/* <ArrowLinks elementId='#projects'/> */}
  <div className="content">
      <div className="skill-box">
       <h1><i className="fas fa-laptop-code"></i>Front End</h1>
       <span className="skill"><span className="percent">100%</span><i className="fab fa-html5"></i>Html</span>
       <span className="skill"><span className="percent">100%</span><i className="fab fa-css3-alt"></i>Css</span>
       <span className="skill"><span className="percent">100%</span><i className="fab fa-js"></i>Java Script</span>
       <span className="skill"><span className="percent">100%</span><img width="38px" height="38px" src="images/redux.png"/>Redux</span>
      </div>
      <div className="skill-box">
          <h1><i className="fab fa-free-code-camp"></i>Back End</h1>
          <span className="skill"><span className="percent">100%</span><i className="fas fa-code"></i>C#</span>
          <span className="skill"><span className="percent">100%</span><i className="fab fa-php"></i>Php</span>
          <span className="skill"><span className="percent">100%</span><i className="fab fa-node-js"></i>Node</span>
      </div>
      <div className="skill-box">
          <h1><i className="fas fa-stream"></i>Frameworks & Libraries</h1>
          <span className="skill"><span className="percent">100%</span><i className="fas fa-code"></i>.netCore</span>
          <span className="skill"><span className="percent">100%</span><i className="fab fa-angular"></i>Angular</span>
          <span className="skill"><span className="percent">100%</span><i className="fab fa-react"></i>React.js</span>
          <span className="skill"><span className="percent">100%</span><i className="fa-solid fa-code"></i>Next.js</span>
      </div>
      <div className="skill-box">
          <h1><i className="fas fa-mobile-alt"></i>Mobile Development</h1>
          <span className="skill"><span className="percent">100%</span><i className="fab fa-android"></i>Android</span>
          <span className="skill"><span className="percent">100%</span> <img width="38px" height="38px" src="images/flutter.png"/> Flutter</span>
      </div>
  </div>
</section>
  )
}

export default Skills