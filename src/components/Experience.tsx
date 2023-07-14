import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles";
import { experiences } from "../constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({experience}) => {

  return (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain rounded-full"/>
    </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className={`${styles.sectionSubText}`}>{experience.company_name}</p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>)
}

const Experience = () => {
  return (
    <>
    <motion.div >
      <p className={`${styles.sectionSubText} mt-12 md:mt-24 lg:mt-32 xl:mt-40 ml-4 md:ml-8 lg:ml-12 xl:ml-[325px] text-base md:text-lg font-normal`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText} mt-1 md:mt-2 lg:mt-3 xl:mt-4 ml-4 md:ml-8 lg:ml-12 xl:ml-[325px] text-2xl md:text-3xl font-bold`}>Work Experience.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default Experience;