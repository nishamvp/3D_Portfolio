import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc'



const ProjectCard = ({name,description,tags,image,source_code_link})=>{
   return(
    <motion.div>
      {name}
    </motion.div>
   )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)}>
          Following projects showcase my skills and experience through real
          world expamples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to slove complex
          problems, work with different technologies, and manage projects
          effectively
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
         <ProjectCard 
         key={`project-${index}`}
         index={index}
         {...project}
          />
        ))}

      </div>
    </>
  )
}

export default sectionWrapper(Works, 'works')
