import  { useEffect } from 'react'
function About() {
    const about=`I am a dedicated Full Stack Developer with experience in creating dynamic and efficient web applications.
                Skilled in using technologies like MERN stack (MongoDB, Express, React, Node.js), .NET Core, Angular, WordPress, and PHP, 
                I have a passion for building responsive, user-friendly interfaces and scalable back-end systems. 
                I focus on writing clean, maintainable code and continuously improving my skills to deliver solutions that meet both user and business needs. 
                I thrive on collaboration and am always eager to contribute to impactful projects.`;
function changeRoleCharacters(){
    const roleElem=document.querySelector('#about .role')
    const roles=['Full Stack','Mern Stack','Frontend','Backend']
    let role: string;
    let roleKey=0
    const chooseRole=()=>{
        if(roleKey==roles.length)
        roleKey=0
        return roles[roleKey++]
    }
    role=chooseRole()
    let len=role.length;
    let isRemoving=true;
    setInterval(() => {
        if(len==0)
       {
        role=chooseRole()
        isRemoving=false
       }
       if(len==role.length)
       {
        isRemoving=true
       }

       if(isRemoving)
        len--
        if(!isRemoving)
        len++

        const res=role.slice(0,len);
        (roleElem as Element).textContent=res
    }, 200);
}

useEffect(() => {
  changeRoleCharacters();
}, [])

  return (
    <section id="about" className=" home-section container">
    <h1 className="title">About Me</h1>
    <div className="parent">
        <div data-aos="fade-right" className="left">
            <div className="image">
                <img src="images/me.jpg" alt="Me"/>
            </div>
        </div>
        <div data-aos="fade-left" className="right">
            <h1 data-aos="flip-right" data-aos-duration="2000">
                Hi 👋 I am <span>Mohammed </span>
                A <span className="role">Full Stack</span>
                <span> Developer</span>
            </h1>
            <p>{about}</p>
            {/* <a data-aos="fade-up" data-aos-duration="2000" className="btn" href="/cv/Mohammed Taha_CV.pdf" target="_blank">Download CV</a> */}
        </div>
    </div>
    {/* <ArrowLinks elementId='#skills'/> */}
</section>
  )
}

export default About