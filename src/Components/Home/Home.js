import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="Container homeDiv flex justify-center items-center  bg-[#e9e6e5] w-[100%]">
      <div className="main flex flex-col items-center gap-[10px] h-[70%] shadow-[5px_5px_rgb(57,36,103,0.5),_10px_10px_rgb(57,36,103,0.4),_15px_15px_rgb(57,36,103,0.3),_20px_20px_rgb(57,36,103,0.2),_25px_25px_rgb(57,36,103,0.1)]  rounded-[5px]  w-[70%] border border-1 border-[#2d6a4f]  ">
        <div className="main-main flex flex-col items-center gap-[30px] w-[90%]">
          <div className="h1Div flex justify-center mt-[30px]">
            <h1 className="text-[40px]">About</h1>
          </div>
          <div className="textDiv w-[80%]  ">
            <p className="indent-10 w-[100%] text-[18px] text-justify">
              We would like to share with you the project we have been working
              on for a long time. While working on this project, we used <span className="font-bold">JavaScript</span>, <span className="font-bold">React.js</span>, <span className="font-bold">Tailwind CSS</span>, <span className="font-bold">GitHub</span> version control system
              and <span className="font-bold">Vercel</span> build and deploy platform. We used the following <span className="font-bold">React npm packages</span>  to increase functionality in the project. We added
              eye-catching colors and fonts to make the project's code more
              attractive and aesthetic. We used <span className="font-bold">Colorhunt.io</span> for colors and <span className="font-bold">Google Fonts</span> for fonts. Thank you for reviewing our project. You
              can check out the links below:
            </p>
          </div>
          <div className="socialDiv w-[100%] mt-[150px] flex justify-center ">
            <div className=" flex justify-around w-[40%] gap-[10px]">
              <a
                href="https://github.com/thealiyarov"
                title="GitHub: Mushfig Aliyarov"
                target="_blank"
              >
                <BsGithub className=" w-[35px] h-[35px]" />
              </a>
              
              
              <a
                href="https://www.linkedin.com/in/mushfigaliyarov/"
                title="Mushfig Aliyarov"
                target="_blank"
              >
                <FaLinkedin className=" text-[#0274b3] w-[35px] h-[35px]" />
              </a>
              <a href="" target="_blank">
                <IoLogoVercel className=" w-[35px] h-[35px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/aytacmursalzade9/"
                title="Aytaj Mursalzadeh"
                target="_blank"
              >
                <FaLinkedin className=" text-[#0274b3] w-[35px] h-[35px]" />
              </a>
              <a
                href="https://github.com/AytacMursalzade"
                title="GitHub: Aytaj Mursalzadeh"
                target="_blank"
              >
                <BsGithub className=" w-[35px] h-[35px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
