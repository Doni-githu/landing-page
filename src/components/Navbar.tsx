import { useState } from 'react'
import { Link } from "react-router-dom"
import { styles } from '../styles'
import { menu, close } from '../assets'
import { CustomSelect } from '../uiComponents'
import { useTranslation } from "react-i18next"


import '../assets/style.css'

const Navbar = () => {
  const [active, setActive] = useState<string>('')
  const [toogle, setToogle] = useState<boolean>(false)
  const { t } = useTranslation()
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex media flex-col md:flex-col justify-between items-center max-w-7xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Doniyor &nbsp;
            <span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row md:gap-10 gap-5 items-center'>
          <li className={`${active === t("about") ? 'text-white' : 'text-secondary'} hover:text-white md:text-[18px] text-[15px] font-medium cursor-pointer`}>
            <a href="#about">{t("about")}</a>
          </li>
          <li className={`${active === t("work") ? 'text-white' : 'text-secondary'} hover:text-white md:text-[18px] text-[15px] font-medium cursor-pointer`}>
            <a href="#work">{t("work")}</a>
          </li>
          <li className={`${active === t("contact") ? 'text-white' : 'text-secondary'} hover:text-white md:text-[18px] text-[15px] font-medium cursor-pointer`}>
            <a href="#contact">{t("contact")}</a>
          </li>
          <li>
            <CustomSelect />
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={!toogle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToogle(!toogle)} />
          <div className={`${!toogle ? 'right-[100%]' : 'right-0'} h-[100vh] ease-in flex flex-col items-end duration-300 py-6 black-gradient absolute top-[65px] w-full z-10`}>
            <ul className='list-none flex flex-col gap-3 justify-center items-center'>
              <li
                className={`${active === t("work") ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(t("work"))
                  setToogle(!toogle)
                }}>
                <a href={`#work`}>{t("work")}</a>
              </li>
              <li
                className={`${active === t("about") ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(t("about"))
                  setToogle(!toogle)
                }}>
                <a href={`#about`}>{t("about")}</a>
              </li>
              <li
                className={`${active === t("contact") ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(t("contact"))
                  setToogle(!toogle)
                }}>
                <a href={`#contact`}>{t("contact")}</a>
              </li>
              <li>
                <CustomSelect />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar