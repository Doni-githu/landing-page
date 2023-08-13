import { IProps, ITestimonial } from '../interfaces/types'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import {useTranslation} from "react-i18next"


const FeedBackCard = ({ item, index }: IProps<ITestimonial>) => {
    const {t} = useTranslation()
    return (
        <motion.div className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full' variants={fadeIn("", "spring", index * 0.5, 0.75)}>
            <p className='text-white font-black text-[48px]'>"</p>
            <div className='mt-1 '>
                <p className='text-white tracking-wider text-[18px]'>{t(`testimonials.card${index + 1}.testimonial`)}</p>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white flex gap-1 items-center text-[16px] font-medium'>
                            <span className='blue-text-gradient'>@</span>
                            <span>{t(`testimonials.card${index + 1}.name`)}</span>
                        </p>
                        <p className='text-secondary text-[12px]'>{item.designation} of {item.company}</p>
                    </div>
                    <div>
                        <img className='w-12 object-cover h-15 rounded-full' src={item.image} alt={`feedback-my-${t(`testimonials.card${index + 1}.name`)}`} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default FeedBackCard