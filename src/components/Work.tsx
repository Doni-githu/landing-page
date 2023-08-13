import { IProject, IProps } from '../interfaces/types'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Tilt } from "react-tilt"
import { github, site } from '../assets'
import { useTranslation } from "react-i18next"
const Work = ({ item, index }: IProps<IProject>) => {
    const { t } = useTranslation()
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl w-full sm:w-[340px]"
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={item.image}
                        alt={t(`workcomponent.card${index + 1}.name`)}
                        className='w-full h-full object-cover rounded-2xl' />
                    <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
                        <div onClick={() => {
                            window.open(item.source_code_link, "_blank")
                        }} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
                        </div>
                        <div onClick={() => {
                            window.open(item.public_link, "_blank")
                        }} className='w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img src={site} alt={item.public_link} className='w-[20px] h-[20px] rounded-full object-cover' />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{t(`workcomponent.card${index + 1}.name`)}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{t(`workcomponent.card${index + 1}.description`)}</p>
                </div>
                <div className='mt-5 flex gap-[5px] flex-wrap'>
                    {item.tags.map((item2) => (
                        <p key={item2.name} className={`${item2.color} text-[14px] cursor-pointer`}>#{item2.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default Work