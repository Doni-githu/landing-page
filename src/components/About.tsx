import { motion } from "framer-motion"
import { styles } from '../styles'
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import ServiceCard from "./ServiceCard"
import { SectionWrapper } from "../hoc"
const About = () => {
  return (
    <>
      <motion.div className="mt-20" variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugit perspiciatis nobis ipsum est nulla, nam odio ducimus, saepe voluptate eum dolorum! Architecto cum  repudiandae, est consectetur nisi odio vero dolores a ea earum ab reiciendis ipsum suscipit illum sit, sunt eligendi. Illo ullam consectetur accusantium nisi? Perferendis voluptates quo autem iure temporibus!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")