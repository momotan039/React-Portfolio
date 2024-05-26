import SkillBox, { skillBoxType } from "../SkillBox"

function Skills() {
  const frontEndSkills:skillBoxType=
    {
      term:'Front End',
      skills:[
        {
          title:'Html5',
          faIconClass:'fab fa-html5'
        },
        {
          title:'Css3',
          faIconClass:'fab fa-css3-alt'
        },
        {
          title:'Java Script',
          faIconClass:'fab fa-js'
        },
      ]
    }
    const backEndSkills:skillBoxType=
    {
      term:'BackEnd',
      skills:[
        {
          title:'.NET',
          faIconClass:'fa-brands fa-adn'
        },
        {
          title:'C#',
          faIconClass:'fas fa-code'
        },
        {
          title:'Php',
          faIconClass:'fab fa-php'
        },
        {
          title:'Node.js',
          faIconClass:'fab fa-node-js'
        },
      ]
    }
    const frameWorksAndLibraries:skillBoxType=
    {
      term:'Frameworks & Libraries',
      skills:[
        {
          title:'.NET',
          faIconClass:'fa-brands fa-adn'
        },
        {
          title:'Angular',
          faIconClass:'fab fa-angular'
        },
        {
          title:'React.js',
          faIconClass:'fab fa-react'
        },
        {
          title:'Next.js',
          faIconClass:'fa-solid fa-code'
        },
        {
          title:'Redux',
          image:'images/redux.png'
        },
        {
          title:'Bootstrap',
          faIconClass:'fa-brands fa-bootstrap'
        },
        {
          title:'JQuery',
          faIconClass:'fa-solid fa-code'
        },
      ]
    }
    const mobileDevSkills:skillBoxType={
        term:'Mobile Development',
        skills:[
          {
            title:'Android',
            faIconClass:'fab fa-android'
          },
          {
            title:'Flutter',
            image:'images/flutter.png'
          }
        ]
      }
  return (
    <section id="skills" className="skills-section container">
    <h1 className="title">Skills</h1>
  <div className="content">
      <SkillBox skillsBox={frontEndSkills}/>
      <SkillBox skillsBox={backEndSkills}/>
      <SkillBox skillsBox={frameWorksAndLibraries}/>
      <SkillBox skillsBox={mobileDevSkills}/>
  </div>
</section>
  )
}

export default Skills