import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'


import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { sectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name,value}= e.target
 
    setForm({...form,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Nisham",
        from_email:form.email,
        to_email:"nishamvp30@gmail.com",
        message:form.message
      },
      "OdPx4B1pwX5B_7MsE"
    ).then(()=>{
      setLoading(false);
      alert('Thank You..I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error)=>{           
      setLoading(false);
      console.log(error)
      alert('Something went wrong..')                            
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h1 className={styles.heroHeadText}>Contact.</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <input
              className=" bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium text-white"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your good name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input
              className=" bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium text-white"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email address?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea
              rows="7"
              className=" bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium text-white"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
            />
          </label>
          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none rounded-xl w-fit text-white font-bold shadow-md shadow-primary "
          >
            {loading ? 'Sending' : 'Send'}
          </button>
            <a className='font-bold text-blue-400 justify-center flex ' href="https://formsubmit.co/el/satala" target="_blank">Trouble with submiting the form try this..</a>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact, 'contact')





/* Service ID
service_ksvwc7p

My Default Template
Template ID:template_ruv8i0n 

Public Key
OdPx4B1pwX5B_7MsE
*/   