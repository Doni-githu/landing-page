import { useState, useRef, ChangeEvent, FormEventHandler, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { IForm } from '../interfaces/types'
import { useTranslation } from "react-i18next"
const templateId = "template_poecqv7"
const serviceId = "service_kul83jb"
const publicKey = "WysPDEQ8qbXiUBUdp"
const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target!.name
    const value = event.target!.value
    setForm({ ...form, [name]: value })
  }
  const handleSumbit: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        to_name: 'Doniyor',
        from_email: form.email,
        to_email: 'ddonierov96@gmail.com',
        message: form.message,
      }, publicKey)
      setForm({
        name: '',
        email: '',
        message: ''
      })
      alert(t("contactcomponent.info"))
    } catch (error) {
      alert(t("contactcomponent.error"))
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className={`${styles.sectionSubText}`}>{t("contactcomponent.sub")}</p>
        <h3 className={`${styles.sectionHeadText}`}>{t("contactcomponent.title")}</h3>

        <form
          ref={formRef}
          onSubmit={handleSumbit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contactcomponent.name.label")}</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={(event) => handleChange(event)}
              placeholder={t("contactcomponent.name.placeholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary font-medium text-white rounded-lg outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contactcomponent.email.label")}</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={(event) => handleChange(event)}
              placeholder={t("contactcomponent.email.placeholder")}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary font-medium text-white rounded-lg outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contactcomponent.message.label")}</span>
            <textarea rows={7} name='message' style={{ resize: 'none' }} value={form.message} onChange={(e) => handleChange(e)} placeholder={t("contactcomponent.message.placeholder")} className='bg-tertiary py-4 px-6 h-[120px] placeholder:text-secondary font-medium text-white rounded-lg outline-none'>

            </textarea>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md font-bold shadow-primary rounded-xl'>
            {loading ? t("contactcomponent.button.load") : t("contactcomponent.button.default")}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")