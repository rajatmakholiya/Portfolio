import { Cloudy, FileCode, Brain } from "lucide-react";
import SmartButton from "../components/sub-components/SmartButton";
const Resume = ({ currentTheme }) => {
  return (
    <div className="h-full flex items-center justify-center text-center mt-48">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-4xl px-8 gap-8 md:gap-4">
        <SmartButton content={"DevOps and Cloud Operations"} Icon={Cloudy} theme={currentTheme} source={"/resume/devops"} />
        <SmartButton content={"Web Developer"} Icon={FileCode} theme={currentTheme} source={"/resume/wd"} />
        <SmartButton content={"AI/ML"} Icon={Brain} theme={currentTheme} source={"/resume/aiml"} />
      </div>
    </div>
  );
};

export default Resume;
