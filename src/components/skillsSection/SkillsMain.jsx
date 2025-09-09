import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion  as Motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px]  relative overflow-hidden">
        <Motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SkillsText />
        </Motion.div>
        <div className="hidden lg:block bottom-[50px] absolute left-[50%] -translate-x-[50%]">
  <AllSkills />
</div>

<div className="block sm:block lg:hidden">
  <AllSkillsSM />
</div>

      </div>
    </div>
  );
};

export default SkillsMain;
