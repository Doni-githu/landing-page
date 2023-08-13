import { motion } from "framer-motion"
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn } from '../utils/motion'
import { testimonials } from "../constants"
import FeedBackCard from './FeedBackCard'
import {useTranslation} from "react-i18next"

const FeedBacks = () => {
  const {t} = useTranslation()
  return (
    <div className='my-12 pb-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={fadeIn("", "", 0.5, 1)}>
          <p className={styles.sectionSubText}>{t("testimonials.sub")}</p>
          <h2 className={styles.sectionHeadText}>{t("testimonials.title")}</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} item={testimonial} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(FeedBacks, "")