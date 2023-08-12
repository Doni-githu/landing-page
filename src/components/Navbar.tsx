import { useState } from 'react'
import { Link } from "react-router-dom"
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState<string>('')
  const [toogle, setToogle] = useState<boolean>(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Doniyor &nbsp;
            <span className='sm:block hidden'>| JS Mastery</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${active === item.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={!toogle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToogle(!toogle)} />
          <div className={`${!toogle ? 'hidden' : 'flex'} py-6 black-gradient justify-center items-center absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl`}>
            <ul className='list-none flex flex-col gap-3 justify-center items-center'>
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${active === item.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(item.title)
                    setToogle(!toogle)
                  }}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar