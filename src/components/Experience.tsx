import WorkTimeLine, { JobType } from './WorkTimeLine';

function Experience() {
  const jobs: JobType[] = [
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Works for me (Oved-li)',
      description: 'In this role, I contribute to creating an inclusive platform that fosters meaningful connections between candidates and employers. Together, we work towards building a brighter and more equitable future for all, I actively participate in designing and implementing cutting-edge features on both the front-end and back-end using MongoDB, Node.js, and React. By maintaining a user-centric focus and adhering to high-quality standards.',
      skills: ['React', 'MongoDB', 'Node.js', 'TypeScript', 'Bootstrap', 'Amazon S3', 'AWS Elastic Beanstalk']
    },
    {
      year: '2024-Present',
      title: 'Freelance Full Stack Developer',
      company: 'Upwork',
      description: `Seasoned freelance full stack developer with expertise in WordPress and PHP, adept at crafting dynamic and user-friendly web applications. Proficient in a wide range of front-end and back-end technologies including HTML/CSS, JavaScript, Node.js, React, and database management.
      Committed to delivering exceptional results while meeting project deadlines`,
      skills: ['Next.js', 'React','Node.js','Tailwind CSS','Bootstrap','Wordpress','Php']
    },
    {
      year: 'Present',
      title: 'Looking for New Opportunities',
      company: 'Open to Offers',
      description: 'Actively seeking new opportunities in software development.',
      skills: ['Next.js', 'React', 'Node.js', 'TypeScript','Wordpress','Php'],
    }
  ];
  return (
    <section id="experience">
      <h1 className='title'>Work History</h1>
      <div className="timeline-container">
        {
          jobs.map((j, i) => <WorkTimeLine key={i} job={j} />)
        }
      </div>
    </section>
  )
}

export default Experience