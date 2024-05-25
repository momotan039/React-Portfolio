function Projects() {
type ProjectType={
    title: string;
    description?: string | null;
    thumbnail: string;
    preview: string;
    githubLink?: string | null;
}
    const projects: ProjectType[] = [
        {
          title: 'Recommended Shows App',
          thumbnail: 'images/recommended-Shows.png',
          preview: 'https://recommended-shows-mt.netlify.app',
        },
        {
          title: 'Typing Speed App',
          thumbnail: 'images/typing-speed.png',
          preview: 'https://typing-speed-mt.netlify.app/',
        },
        {
          title: 'Shoes Store App',
          thumbnail: 'images/shoes.png',
          preview: 'https://shoes-store-mt.netlify.app/',
        },
        {
          title: 'Musalsali Project',
          thumbnail: 'images/musalsali%20Mockup.png',
          preview: 'http://musalsali.byethost9.com/',
        },
        {
          title: 'Omega Academy',
          thumbnail: 'images/omega%20mockup.png',
          preview: 'https://omegaangular.firebaseapp.com/main',
        },
        {
          title: 'Dice Game',
          thumbnail: 'images/dice_game.png',
          preview: 'https://leafy-puppy-5316c2.netlify.app/dice%20game/',
        },
        {
          title: 'MineCraft 2D Game',
          thumbnail: 'images/minecraft2D.png',
          preview: 'https://leafy-puppy-5316c2.netlify.app/minecraft/',
        },
        {
          title: 'Tesla Model 3 Project',
          thumbnail: 'images/tesla.png',
          preview: 'https://leafy-puppy-5316c2.netlify.app/',
        },
        {
          title: 'EdgeLedger Project',
          thumbnail: 'images/edgeledger.png',
          preview: 'https://leafy-puppy-5316c2.netlify.app/edgeledger%20project/',
        },
        {
          title: 'Hotel',
          thumbnail: 'images/hotel.png',
          preview: 'https://leafy-puppy-5316c2.netlify.app/Hotel%20project/',
        },
      ];
  return (
    <section id="projects" className="portfolio-section container">
                  <h1 className="title">My Projects</h1>
                <div className="projects">
                   {
                    projects.map((p)=>{
                        return  <a target="_blank" href={p.preview}>
                        <div className="project">
                            <h3 className="title-project">{p.title}</h3>
                            <div className="thumbnail">
                                <img src={p.thumbnail} />
                            </div>
                        </div>
                    </a>
                    })
                   }
                    
                </div>
                {/* <ArrowLinks elementId='#contact'/> */}
            </section>
  )
}

export default Projects