import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import ExperienceCard from "./ExperienceCard"
import { useTranslation } from "react-i18next"
const Experience = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>{t("expirience.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("expirience.title")}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, idx) => (
            <ExperienceCard item={experience} index={idx} key={idx} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")