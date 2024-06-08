import  { useEffect } from 'react'
function About() {
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
  changeRoleCharacters()
}, [])

  return (
    <section id="about" className=" home-section container">
    <h1 className="title">About Me</h1>
    <div className="parent">
        <div className="left">
            <div className="image">
                <img src="images/me.jpg" alt="Me"/>
            </div>
        </div>
        <div className="right">
            <h1>
                Hi 👋 I am <span>Mohammed </span>
                A <span className="role">Full Stack</span>
                <span> Developer</span>
            </h1>
            <p>
                I am an efficient self-learner with a positive attitude, motivated to 
                continuously expand my skill set. I possess a deep understanding of the MERN stack and PHP WordPress. I 
                have contributed to large scale and personal projects alike. My commitment to continuous learning and 
                growth fuels my ability to tackle complex challenges. Moreover, I excel in collaborative environments, 
                leveraging my team player mindset to drive success and support the mission of your innovative firm.
            </p>
            <a className="btn" href="/cv/Mohammed Taha_CV.pdf" target="_blank">Download CV</a>
        </div>
    </div>
    {/* <ArrowLinks elementId='#skills'/> */}
</section>
  )
}

export default About