import { ReactNode } from "react"

  export interface skillType{
    title:string,
    faIconClass?:string,
    image?:string
}
export interface skillBoxType{
    term:string,
    skills:skillType[]
}

function SkillBox({skillsBox}:{children?:ReactNode,skillsBox:skillBoxType}) {
  return (
    <div className="skill-box">
          <h1><i className="fas fa-mobile-alt"></i>{skillsBox.term}</h1>
          {
            skillsBox.skills.map((skill,i) => {
                return <span data-aos='zoom-out-right' data-aos-duration={(i+1)*300} key={i} className="skill">
                  {/* <span className="percent">100%</span> */}
                            {skill.faIconClass&&<i className={skill.faIconClass}></i>}
                            {skill.image&&<img width="38px" height="38px" src={skill.image}/>}
                            {skill.title}
                        </span>
            })
          }
      </div>
  )
}

export default SkillBox