import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { Work } from "."

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ipsum quasi rerum, similique suscipit odio eum quidem hic praesentium a tenetur repellendus placeat ducimus provident alias voluptatibus blanditiis iure quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
          inventore voluptates praesentium minus, quasi sint minima nesciunt asperiores qui itaque voluptas pariatur non tenetur! Veniam quo praesentium nesciunt iste.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((item, index) => (
          <Work
            work={item}
            index={index}
            key={`project-${index}`}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')