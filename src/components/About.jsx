import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center '
        >

        <img src={icon} alt={title} srcset="" className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an enthusiastic MERN Stack Developer with 0.7 years of experience
        and a strong educational background in Statistics. I have completed a
        web development internship at Techmindz and successfully delivered
        multiple freelance projects. Currently, I am working on an e-commerce
        web application that demonstrates my expertise in Node JS, Express JS,
        MongoDB, HTML, AJAX, HBS, and Bootstrap. With a keen eye for detail and
        analytical abilities, I am dedicated to staying updated with the latest
        technologies and industry trends. My decision-making, teamwork, and
        leadership skills make me a valuable asset to any collaborative project.
        I am excited about the opportunity to join Deepnetsoft and contribute to
        its success. Please review my attached resume, and I am available for
        further discussion via phone or email.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About,"about") 
