/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../hoc';
import { avatar } from '../assets';

interface serviceCardProps {
  index: number,
  title: string,
  icon: string,
}



const ServiceCard: React.FC<serviceCardProps> = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-auto" >
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div  className='bg-tertiary rounded-[20px] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white font-bold text-[26px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About: React.FC = () => {
  return (
    <>
      <motion.div>
        <motion.div variants={fadeIn("right", "spring", 1, 0.7)}>
          <img src={avatar} alt="avatar" className='w-[128px] h-[128px]'/>
        </motion.div>
        <p className={`${styles.sectionSubText} text-[20px] font-normal`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[40px] font-bold`}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm skilled Software developer with experience in TypeScript, JavaScript and Java, and expertise in frameworks
        like react, node.js (Nest js) and three.js. I'm a fast learner.
        I'm a future Software engineer will graduate from Esprit Honoris Groupe Universities .
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about")