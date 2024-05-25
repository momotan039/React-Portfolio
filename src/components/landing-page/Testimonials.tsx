function Testimonials() {
    interface testimonialsType {
        client: string,
        postition: string,
        feedback: string
    }
    const testimonials: testimonialsType[] = [
        {
            client: 'Idan Peled',
            postition: 'Funder & CEO | Works for me (Oved-li)',
            feedback: 'Mohammed was a full-stack programmer at our company; he worked on a very large and complex project. He did it with dedication and a lot of motivation! He is very professional, has high learning abilities, and gives his all to make the project successful. We were very, very satisfied with him!'
        },
        {
            client:'Christian',
            postition:'Upwork Client',
            feedback:'Mohammed did an amazing job creating two responsive react footers in light and dark theme. He did exactly what I asked and the turnaround was super quick. Already hired again for another react project :)'
        },
        {
            client:'Peter',
            postition:'Upwork Client',
            feedback:'Problem-solving skills and critical thinking were truly on display. Not because of just find a solution, Mohammed crafted an elegant one that will ensure the project\'s longevity and maintainability'
        },

    ]
    return (
        <section id='testimonials' className='container'>
            <h1 className='title'>Testimonials</h1>
            <div className="row">
                {testimonials.map((t) => {
                    return <div className="card">
                        <div className="head row">
                        <i className="fa-solid fa-star"></i>
                            <div>
                                <h1>{t.client}</h1>
                                <p>{t.postition}</p>
                            </div>
                        </div>
                        <p>{t.feedback}</p>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Testimonials