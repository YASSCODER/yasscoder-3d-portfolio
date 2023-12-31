import { BallCanvas } from "./canvas";
import { sectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}

    </div>
  )
}

export default sectionWrapper(Tech, "tech");