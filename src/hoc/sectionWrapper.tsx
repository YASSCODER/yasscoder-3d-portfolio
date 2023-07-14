import {motion} from 'framer-motion';
import { styles } from '../styles';


const sectionWrapper = (_components: React.FC, idName: string) => function HOC() {
  return(
    <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className='hash-span'>&nbsp;</span>
        <_components />
    </motion.section>
  )
}

export default sectionWrapper