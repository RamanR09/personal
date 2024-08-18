import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import me from "./assets/me.png";
import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import tailwind from "./assets/tailwind-css.svg";
import appWrite from "./assets/Appwrite.png";

import pro0 from "./assets/project0.png";
import pro1 from "./assets/project1.png";
import pro2 from "./assets/project2.png";
import pro3 from "./assets/project3.png";
import pro4 from "./assets/project4.png";
import pro5 from "./assets/project5.png";
import sign from "./assets/signature.png";

// import conf from "./conf/conf";
// import { getFileURL } from "./appwrite/fileService";
// import { IoHome } from "react-icons/io5";

import ImageDisplay from "./components/FileDisplay";
import VideoDisplay from "./components/VideoDisplay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [greet, setGreet] = useState("Morning");
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [viewImg, setViewImg] = useState(true);
  const [education, setEducation] = useState(true);
  const [project, setProject] = useState(true);

  const bucketId = "665939c70034ce7a5d5f";
  const fileId = "66c087380038a21004fb";
  const videoId = "66767300002190626781";
  const iconsId = "666161c90001c898df5f";
  const signId = "66c08a14002611425cd7";
  const reactId = "66c19d1f0001372f6dda";

  const pageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".image", {
        x: mouseCoords.x,
        y: mouseCoords.y,
      });
    },
    { dependencies: [mouseCoords] }
  );

  useGSAP(() => {
    gsap.to(
      ".mainImg",
      {
        scale: 1,
        delay: 3,
      },
      { dependencies: [viewImg] }
    );
  });

  const date = new Date();
  const showTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  useEffect(() => {
    if (date.getHours() < 12) {
      setGreet("Morning");
    } else if (date.getHours() < 18) {
      setGreet("Afternoon");
    } else {
      setGreet("Evening");
    }
  }, [date]);

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      setMouseCoords({ x: e.pageX, y: e.pageY });
    };

    const pageElement = pageRef.current;
    if (pageElement) {
      pageElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (pageElement) {
        pageElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#1B100E]">
      <nav className="z-10 overflow-hidden  flex flex-col sm:flex-row sticky top-0  justify-between text-white text-xl text-wrap font-semibold  py-2 px-5 bg-[#ffffff0e]  ">
        <div className="flex flex-row  justify-between">
          <div className="  max-h-14 max-w-36" alt="">
            <ImageDisplay bucketId={iconsId} fileId={signId} />
          </div>
          {toggle && (
            <IoClose
              className=" navBar sm:hidden flex  my-auto m-2"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {!toggle && (
            <FaBars
              className=" navBar sm:hidden flex  my-auto m-2"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        {toggle && (
          <ul className="  flex flex-col sm:flex-row   justify-start items-end px-2 pr-4  gap-4">
            <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out  ">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
              <a href="#about">About</a>
            </li>
            <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
              <a href="#skills">Skills</a>
            </li>
            <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        )}
        <ul className="  flex flex-col sm:flex-row max-sm:hidden  justify-end items-end my-auto px-2 mr-4 gap-4">
          <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
            <a href="#home">Home</a>
          </li>
          <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
            <a href="#about">About</a>
          </li>
          <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
            <a href="#skills">Skills</a>
          </li>
          <li className=" hover:text-[#e4afa4] hover:scale-110 ease-in-out ">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div
        id="home"
        className=" home flex flex-col  min-h-screen  bg-[#1B100E]  overflow-hidden px-4"
        ref={pageRef}
      >
        {viewImg && (
          <img
            src={me}
            className="image z-9 rounded-full  flex items-center justify-center h-14 w-14 overflow-hidden p-1  transform -translate-x-1/2 -translate-y-1/2  "
            alt="Me"
          />
        )}
        {!viewImg && <div className="flex h-14"></div>}
        <div className="flex flex-col h-full min-h-screen lg:flex-row gap-2 px-6">
          <div className="z-8 flex flex-col justify-center h-[30rem] w-full mt-4 border border-[#c86450] rounded-3xl  text-white text-xl font-semibold text-wrap p-6 ">
            <h1 className="z-10 flex text-wrap text-3xl text-[#e4afa4] md:text-5xl p-3 justify-center  ">
              Hiii Good {greet}, This is Raman
            </h1>
            <h1 className=" z-10 developer text-wrap text-2xl md:text-4xl p-3 flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
              A Innovative Full Stack Web developer
            </h1>
            <h3 className=" z-10 text-wrap text-xl text-[#e4afa4] md:text-3xl p-3 flex justify-center ">
              Understanding the thoughts to making it a reality
            </h3>
          </div>

          <div
            onMouseOver={() => {
              setViewImg(false);
            }}
            onMouseLeave={() => {
              setViewImg(true);
            }}
            className=" mainImg z-10  flex justify-center h-[30rem] w-3/4 md:w-1/2 lg:w-1/3 bg-[#74512d16] rounded-3xl mx-auto mt-4  text-white text-xl font-semibold text-wrap"
          >
            {/* Mouse Coordinates: X={mouseCoords.x}, Y={mouseCoords.y} */}
            {!viewImg && (
              // <img
              //   src={me}
              //   className=" rounded-full relative ease-in-out duration-300 delay-500  animate-fadeIn "
              // ></img>
              <ImageDisplay bucketId={bucketId} fileId={fileId} />
            )}
          </div>
        </div>
      </div>
      <div
        id="about"
        className=" about  min-h-screen w-full flex flex-col items-center text-white bg-gradient-to-b from-[#1B100E] to-[#1b100eef]"
      >
        <div className="flex flex-row p-2 m-4">
          <h1 className=" developer flex text-wrap text-6xl  font-bold bg-gradient-to-r from-[#e4afa4] to-[#5c443f] p-4 mr-0 m-7 ">
            Know ME
          </h1>
          <h3 className="text-6xl p-4 ml-0 m-7 ">✌️✌️</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center  w-full   ">
          <div className="flex text-balance    text-[#ecc5bd]  md:w-1/2  border-[#c86450] p-5 m-4 rounded-xl ">
            <p className="text-2xl text-justify text-[#bca9a6] font-sans font-semibold gap-3 overflow-hidden">
              I’m a dynamic web developer with a talent for rapidly
              understanding and implementing project requirements. My expertise
              lies in creating stunning web applications with top-notch UI/UX,
              ensuring an exceptional user experience. Grounded in core computer
              science fundamentals, I craft robust and scalable solutions.
              Always eager to learn and adapt, I thrive on integrating the
              latest technologies to push the boundaries of innovation. Let's
              turn ideas into captivating digital experiences!
            </p>
          </div>
          <div className="h-[30rem] md:w-1/2 flex text-balance text-lg  font-bold text-[#ecc5bd]   border-[#c86450]  m-4 p-5 rounded-xl ">
            {/* <video
              className=" flex top-0 left-0 w-full h-full object-cover rounded-xl overflow-hidden  "
              autoPlay
              loop
              muted
              src={meVid}
            ></video> */}
            <VideoDisplay bucketId={bucketId} fileId={videoId} />
          </div>
        </div>
      </div>

      <div
        id="skills"
        className=" skills  min-h-screen w-full flex flex-col md:flex-row items-center text-white bg-gradient-to-b from-[#1b100eef] to-[#1B100E]"
      >
        <div className="flex flex-col  w-full  md:w-1/2 border-[#c86450] p-5 m-4 rounded-xl">
          <div className=" developer flex justify-center p-2 m-4 items-center text-5xl font-sans font-bold bg-gradient-to-r from-[#fffefe] to-[#5c443f]">
            SKILLS
          </div>

          <div className="flex  items-end ">
            <div className="grid grid-cols-2 w-full gap-4 p-4 place-items-center">
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className="h-20 m-4" src={react} alt="" />
                React.js
                <a href="https://react.dev/learn"></a>
              </li>
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className="h-20 m-4" src={html} alt="" />
                HTML
              </li>
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className="h-20 m-4" src={css} alt="" />
                CSS
              </li>
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className="h-20 m-4" src={javascript} alt="" />
                javaScript
              </li>
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className=" h-20 m-4" src={tailwind} alt="" />
                Tailwind-CSS
              </li>
              <li className="flex flex-col justify-center items-center text-2xl">
                <img className="h-20 m-4" src={appWrite} alt="" />
                AppWrite
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:h-full w-full md:w-1/2 border-[#c86450] p-5 m-4 rounded-xl">
          <div className="  flex  flex-row sm:flex-row justify-center w-full  overflow-hidden items-center text-lg md:text-2xl font-sans font-bold ">
            <button
              onClick={() => {
                setEducation(true);
              }}
              className=" flex justify-center p-2 m-3 rounded-lg  border border-[#e4afa4] hover:bg-[#1B100E] hover:border-2  focus:outline-none focus:border-2 focus:border-[#e4afa4] focus:bg-gradient-to-r from-[#e4afa4] to-[#5c443f] "
            >
              EDUCATION
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEducation(false);
              }}
              className="flex justify-center p-2 m-3 rounded-lg  border border-[#e4afa4] hover:bg-[#1B100E] hover:border-2  focus:outline-none focus:border-2 focus:border-[#e4afa4] focus:bg-gradient-to-r from-[#e4afa4] to-[#5c443f] "
            >
              CERTIFICATES
            </button>
          </div>

          {education && (
            <div className="flex flex-col gap-4 w-full p-6 ">
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  BE/B.TECH
                  <span className="text-sm text-[#e4afa4]">2021-Present</span>
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  Chandigarh University, Gharuan, Punjab, India
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  Intermediate
                  <span className="text-sm text-[#e4afa4]">2018-2020</span>
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  ST. John's Academy , Hajipur, Bihar, India
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  10Th
                  <span className="text-sm text-[#e4afa4]">2017-2018</span>
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  ST. John's Academy , Hajipur, Bihar, India
                </p>
              </div>
            </div>
          )}
          {!education && (
            <div className="flex flex-col gap-4 w-full p-6">
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  React JS
                  {/* <span className="text-sm text-[#e4afa4]">2021-Present</span> */}
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  Through Infosys Springboard
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  Principle of UI/UX design
                  {/* <span className="text-sm text-[#e4afa4]">2018-2020</span> */}
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  Through Meta on Coursera
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 mx-4 mt-5 rounded-lg bg-[#3b261d] ">
                <h1 className=" flex  items-center justify-between text-wrap text-[#d7cbc8] font-semibold md:text-lg text-base  ">
                  Foundations of Project Management
                  {/* <span className="text-sm text-[#e4afa4]">2018-2020</span> */}
                </h1>
                <p className="text-wrap text-[#edc9c2]">
                  Through Google on Coursera
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        id="projects"
        className=" about  min-h-screen w-full flex flex-col items-center text-white bg-gradient-to-b from-[#1B100E] to-[#1b100eef]"
      >
        <div className="flex flex-row p-2 m-4">
          <h1 className=" developer flex text-wrap text-6xl  font-bold bg-gradient-to-r from-[#e4afa4] to-[#5c443f] p-4 mr-0 m-2 ">
            Projects
          </h1>
          <h3 className="text-6xl p-4 ml-0 m-7 "></h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  grid-items-center gap-6 w-full  px-4 ">
          {/* <div
            onMouseEnter={() => {
              setProject(false);
            }}
            onMouseLeave={() => {
              setProject(true);
            }}
            className="flex text-balance    text-[#ecc5bd] h-[20rem] w-full  border border-[#c86450]  m-6  rounded-xl hover:animate-fadeIn "
          >
            {project && (
              <img
                src={p1}
                className="flex justify-center w-full rounded-xl overflow-hidden  "
              ></img>
            )}
            {!project && (
              <div className="flex  relative w-full text-balance text-[#ecc5bd] h-full    rounded-xl ">
                hii
              </div>
            )}
          </div>
          <div className="flex  flex- text-balance    text-[#ecc5bd] h-[20rem] w-full  border border-[#c86450] m-6   rounded-xl ">
            2
          </div>
          <div className="flex text-balance    text-[#ecc5bd] h-[20rem] w-full  border border-[#c86450] p-5 m-6  rounded-xl ">
            3
          </div>
          <div className="flex text-balance    text-[#ecc5bd] h-[20rem] w-full  border border-[#c86450] p-5 m-6  rounded-xl ">
            4
        </div> */}

          <div class=" flex  h-[20rem]  bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="flex absolute backface-hidden text-balance    text-[#ecc5bd] w-full h-full border border-[#c86450]   rounded-xl ">
                <img
                  src={pro0}
                  className="flex justify-center w-full rounded-xl  mx-auto  "
                ></img>
              </div>
              <div class=" flex absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd]  h-full w-full border border-[#c86450]   rounded-xl ">
                <p class="code developer text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  A demonstration of me and about me ...
                </p>
              </div>
            </div>
          </div>
          <div class=" flex  h-[20rem] bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="flex absolute backface-hidden text-balance    text-[#ecc5bd] w-full h-full  border border-[#c86450]   rounded-xl ">
                <img
                  src={pro1}
                  className="flex justify-center w-full rounded-xl  mx-auto  "
                ></img>
              </div>
              <div class=" flex absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd]  h-full w-full border border-[#c86450]   rounded-xl ">
                <p class="code developer  text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  <a className="" href="https://www.cipherschools.com/">
                    Made in a vision for interCollege Community in{" "}
                    <strong>CipherSchools </strong>
                    Hackathon
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class=" flex h-[20rem] bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className="flex absolute backface-hidden  text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <img
                  src={pro2}
                  className="flex justify-center w-full  rounded-xl mx-auto   "
                ></img>
              </div>
              <div class=" flex  absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <p class="code developer text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  A crypto currency exchange platform through MetaMask
                </p>
              </div>
            </div>
          </div>
          <div class=" flex h-[20rem] bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className="flex absolute backface-hidden  text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <img
                  src={pro3}
                  className="flex justify-center w-full  rounded-xl mx-auto   "
                ></img>
              </div>
              <div class=" flex  absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <p class="code developer text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  Made for the Alexa Developers Community{" "}
                </p>
              </div>
            </div>
          </div>
          <div class=" flex h-[20rem] bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className="flex absolute backface-hidden  text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <img
                  src={pro5}
                  className="flex justify-center w-full  rounded-xl mx-auto   "
                ></img>
              </div>
              <div class=" flex  absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <p class="code developer text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  A Password / OTP generator module
                </p>
              </div>
            </div>
          </div>
          <div class=" flex h-[20rem] bg-transparent cursor-pointer group perspective  ">
            <div class="flex relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
              <div className="flex absolute backface-hidden  text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <img
                  src={pro4}
                  className="flex justify-center w-full  rounded-xl mx-auto   "
                ></img>
              </div>
              <div class=" flex  absolute my-rotate-y-180 backface-hidden text-balance    text-[#ecc5bd] h-full w-full  border border-[#c86450]    rounded-xl ">
                <p class="code developer text-wrap font-bold text-2xl lg:text-4xl p-3 m-auto flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                  My firstever Portfolio Website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        id="contact"
        className=" contact  min-h-screen w-full flex flex-col items-center text-white bg-brown-500"
      >
        <div className="flex flex-row p-2 m-4">
          <h1 className=" developer flex text-wrap text-6xl  font-bold bg-gradient-to-r from-[#e4afa4] to-[#5c443f] p-4 mr-0 m-7 ">
            Reach Out
          </h1>
          <h3 className="text-6xl p-4 ml-0 m-7 ">✌️✌️</h3>
        </div>
        <div className="flex flex-between h-[30rem] w-3/4 bg-[#c864500a] rounded-xl  backdrop-filter backdrop-blur-3xl border-2 border-[#c86450]"></div>
      </div> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
