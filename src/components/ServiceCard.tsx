import React from 'react'
import { IServiceCardProps } from '../interfaces/types'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
const ServiceCard = ({ service, index }: IServiceCardProps) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center'
                >

                    <img src={service.icon} className='w-[80px] h-[80px] object-contain' alt={service.title} />
                    <h3 className='w-full text-white text-[20px] text-center'>{service.title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default ServiceCard