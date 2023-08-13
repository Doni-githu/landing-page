import { motion } from "framer-motion"
import { styles } from '../styles'
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import ServiceCard from "./ServiceCard"
import { SectionWrapper } from "../hoc"
import { useTranslation } from "react-i18next"
const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div className="mt-20" variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>{t("aboutcomponent.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("aboutcomponent.title")}.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("aboutcomponent.about")}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <>
            <ServiceCard key={t(`aboutcomponent.card${index + 1}.title`)} index={index} item={service} />
          </>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")