import image from '../../assets/bg-hero.jpg'

const backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, .35) 33.33%, rgba(0, 0, 0, .4) 50%, rgba(0, 0, 0, .75) 100%), url(${image})`

const Hero = () => {
    return <section className="masthead" style={{ backgroundImage: backgroundImage }}>
        <>
            <h1 className="text-white">Je suis Frédérick AGATHE</h1>
            <h2 className="h4 text-primary">développeur web fullstack PHP react</h2>
        </>
        <article className="masthead-footer">
            <a href='#about'>scroll</a>
        </article>
    </section>
}

export default Hero