import {motion} from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const sectionWrapper = (_components: React.FC, idName: string) => function HOC() {
  return(
    <motion.section
    >
        <_components />
    </motion.section>
  )
}

export default sectionWrapper