import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
  const Hobbies = [
    "I have solved 300+ problems on LeetCode",
    "Interested in web development and building complex web applications",
  ];

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi, I&apos;m Rihan Mulani from Maharashtra, India. I am a self-taught software developer passionate about coding and building web applications. I thrive on learning new technologies and continuously improving my skills to grow as a developer.
          </p>
         
          <ul>
            {Hobbies.map((hobby, key) => (
              <li key={key} className="flex gap-3 md:items-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{hobby}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%] flex justify-center">
          <AboutAvatarSVG className="w-full" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;
