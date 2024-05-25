function Services() {
    interface servicesType{
        title:string,
        description:string,
        icon:string
    }
    const services:servicesType[] = [{
        title: 'Web Development',
        description: 'Building dynamic, user-friendly websites using modern web technologies.',
        icon: 'fas fa-code'
      },
      {
        title: 'API Development',
        description: 'Creating robust APIs for seamless communication between different software systems.',
        icon: 'fas fa-exchange-alt'
      },
      {
        title: 'Database Management',
        description: 'Designing and managing databases to ensure data integrity and performance.',
        icon: 'fas fa-database'
      },
      {
        title: 'Frontend Design',
        description: 'Crafting visually appealing and intuitive user interfaces using HTML, CSS, and JavaScript.',
        icon: 'fas fa-paint-brush'
      },
      {
        title: 'Backend Development',
        description: 'Developing secure and scalable server-side applications and services.',
        icon: 'fas fa-server'
      },
      {
        title: 'Responsive Design',
        description: 'Ensuring websites are fully functional and visually pleasing on all devices and screen sizes.',
        icon: 'fas fa-mobile-alt'
      },
      {
        title: 'Cloud Services',
        description: 'Deploying, managing, and scaling applications using cloud platforms such as AWS, Hostinger.',
        icon: 'fas fa-cloud'
      },
      {
        title: 'Security Implementation',
        description: 'Ensuring application security through best practices and tools, including secure coding, authentication, and encryption.',
        icon: 'fas fa-shield-alt'
      },
      {
        title: 'Performance Optimization',
        description: 'Improving application performance through code optimization, caching strategies, and efficient resource management.',
        icon: 'fas fa-tachometer-alt'
      },
      {
        title: 'Testing and QA',
        description: 'Conducting thorough testing and quality assurance to ensure bug-free and high-quality software releases.',
        icon: 'fas fa-vial'
      },
      {
        title: 'Technical Consulting',
        description: 'Providing expert advice and solutions to help businesses achieve their technical goals and overcome challenges.',
        icon: 'fas fa-lightbulb'
      }
    ];
  return (
    <section id='services' className='container'>
        <h1 className='title'>Services</h1>
        <div className="row">
                {services.map((s) => {
                    return <div className="card">
                        <div className="head row">
                        <i className={s.icon}></i>
                                <h1>{s.title}</h1>
                        </div>
                        <p>{s.description}</p>
                    </div>
                })}
            </div>
    </section>
  )
}

export default Services