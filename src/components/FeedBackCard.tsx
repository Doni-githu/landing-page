import { IFeedBackCardProps } from '../interfaces/types'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'


const FeedBackCard = ({ testimonial, index }: IFeedBackCardProps) => {
    return (
        <motion.div className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full' variants={fadeIn("", "spring", index * 0.5, 0.75)}>
            <p className='text-white font-black text-[48px]'>"</p>
            <div className='mt-1 '>
                <p className='text-white tracking-wider text-[18px]'>{testimonial.testimonial}</p>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white flex gap-1 items-center text-[16px] font-medium'>
                            <span className='blue-text-gradient'>@</span>
                            <span>{testimonial.name}</span>
                        </p>
                        <p className='text-secondary text-[12px]'>{testimonial.designation} of {testimonial.company}</p>
                    </div>
                    <div> 
                        <img className='w-12 object-cover h-15 rounded-full' src={testimonial.image} alt={`feedback-my-${testimonial.name}`} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default FeedBackCard