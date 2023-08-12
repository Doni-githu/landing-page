import React from 'react'
import { IExperienceCardProps } from '../interfaces/types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
const ExperienceCard = ({ experience }: IExperienceCardProps) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ backgroundColor: '#1d1836', color: '#fff' }}
            contentArrowStyle={{
                borderRight: '7px solid #232631',
            }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div>
                    <img src={experience.icon} className='w-[100%] h-[100%]' alt={experience.title} />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((item, index) => (
                    <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >{item}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard