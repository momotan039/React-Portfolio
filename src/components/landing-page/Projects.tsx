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
          title: 'Restaurant Café Food Theme',
          thumbnail: 'images/Restaurant2.png',
          preview: 'https://mohamad-taha.com/portfolio/wordpress/restaurant-wp',
        },
        {
          title: 'Lunch Craft SaaS Theme',
          thumbnail: 'images/Lunch_Craft.png',
          preview: 'https://mohamad-taha.com/portfolio/wordpress/lunch_craft-wp',
        },
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
          title: 'Musalsali Movies Series Theme',
          thumbnail: 'images/musalsali%20Mockup.png',
          preview: 'https://mohamad-taha.com/portfolio/wordpress/musalsali/',
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
                    projects.map((p,i)=>{
                        return  <a key={i} target="_blank" href={p.preview}>
                        <div data-aos='zoom-out-right' data-aos-duration={(i+1)*300} className="project">
                            <h3 className="title-project">{p.title}</h3>
                            <div className="thumbnail">
                                <img loading="lazy" src={p.thumbnail} />
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