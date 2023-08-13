import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { Work } from "."
import {useTranslation} from "react-i18next"

const Works = () => {
  const {t} = useTranslation()
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>{t('workcomponent.sub')}</p>
        <h2 className={styles.sectionHeadText}>{t('workcomponent.title')}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("workcomponent.body")}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((item, index) => (
          <Work
            item={item}
            index={index}
            key={`project-${index}`}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')