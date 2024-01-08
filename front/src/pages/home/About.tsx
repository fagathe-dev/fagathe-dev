import { Style } from "../../types/ui.type";

interface AboutProps extends Style {}


const About = ({cx = [], style, id}: AboutProps) => (
    <section id={id} style={style} className={cx.join('')}>

    </section>
)

export default About
