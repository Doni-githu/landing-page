import React from 'react'
import { IWorkProps } from '../interfaces/types'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Tilt } from "react-tilt"
import { github } from '../assets'
const Work = ({ work, index }: IWorkProps) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={work.image}
                        alt={work.name}
                        className='w-full h-full object-cover rounded-2xl' />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div onClick={() => {
                            window.open(work.source_code_link, "_blank")
                        }} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{work.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{work.description}</p>
                </div>
                <div className='mt-5 flex gap-[5px] flex-wrap'>
                    {work.tags.map((item) => (
                        <p key={item.name} className={`${item.color} text-[14px] cursor-pointer`}>#{item.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default Work