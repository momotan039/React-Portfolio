export interface JobType {
    year: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
  }
interface JobProp{
    job:JobType,
    index:number
}
function WorkTimeLine({job,index}:JobProp) {
  return (
    <div className="timeline-item">
    <div className="time-line"></div>
    <div className="circle">
      <i className="fas fa-briefcase"></i>
    </div>
    <div data-aos='fade-down' data-aos-duration={(index+1)*1000} className="card">
      <h3><i className="fa-solid fa-briefcase"></i><span className="title-job">{job.title}</span></h3>
      <h3 className='year'>
        <i className="fas fa-calendar-alt"></i>
        <span className='year'>{job.year}</span>
        <i className="fa-solid fa-building"></i> {job.company}
      </h3>
      <p>{job.description}</p>
      <ul className="skills-list">
        {job.skills.map((skill, skillIndex) => (
          <li className="skill-item" key={skillIndex}><i className="fa-solid fa-code"></i>{skill}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default WorkTimeLine