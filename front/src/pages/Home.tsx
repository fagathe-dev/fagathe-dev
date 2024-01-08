import About from "./home/About";
import Contact from "./home/Contact";
import Hero from "./home/Hero";

const Home = () => (<>
    <Hero />
    <About id="about" style={{height: '100vh'}}/>
    <Contact/>
</>)

export default Home