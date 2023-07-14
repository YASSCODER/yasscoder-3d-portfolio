import { motion } from "framer-motion";

import { styles } from "../styles";

const sectionWrapper = (_component: any, idName: string | undefined) =>
  function HOC() {
    return (
      <motion.section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <_component />
      </motion.section>
    );
  };

export default sectionWrapper;