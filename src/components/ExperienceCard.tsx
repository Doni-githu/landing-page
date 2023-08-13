import { IExperience, IProps } from '../interfaces/types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTranslation } from "react-i18next"

const ExperienceCard = ({ item, index }: IProps<IExperience>) => {
    const { t } = useTranslation()
    return (
        <VerticalTimelineElement
            contentStyle={{ backgroundColor: '#1d1836', color: '#fff' }}
            contentArrowStyle={{
                borderRight: '7px solid #232631',
            }}
            date={t(`expirience.card${index + 1}.date`)}
            iconStyle={{ background: item.iconBg }}
            icon={
                <div>
                    <img src={item.icon} className='w-full h-full rounded-full' alt={t(`expirience.card${index + 1}.title`)} />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{t(`expirience.card${index + 1}.title`)}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t(`expirience.card${index + 1}.company`)}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {item.points.map((_, index2) => (
                    <li
                        key={`experience-point-${index2}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >{t(`expirience.card${index + 1}.points.text${index2 + 1}`)}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard