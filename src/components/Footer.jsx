import React from "react";
import twitter from "../assets/twitter_logo.png";
import instagram from "../assets/instagram-logo.png";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import gmail from "../assets/gmail-logo.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" contact   w-full flex flex-col  text-wrap items-center mt-12  text-white bg-brown-500"
    >
      <a
        href="https://github.com/RamanR09"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row"
      >
        <img
          className="  flex hover:scale-125 duration duration-300 h-10 hover:ease-in-out items-center justify-between m-1"
          src={gmail}
          href
        />
        <h1 className="developer items-center  text-wrap text-2xl font-sans font-semibold md:text-4xl p-3 flex justify-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          {" "}
          ramannew9@gmail.com{" "}
        </h1>
      </a>
      <div className="flex flex-row p-2 m-4 gap-4 ">
        <a
          href="http://www.linkedin.com/in/raman-kumar-147a47234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" flex hover:scale-125 duration duration-300 h-20 hover:ease-in-out"
            src={linkedin}
            href
          />
        </a>
        <a
          href="https://x.com/RamanIndia9?t=2tmiEiflvSviulplez2Xyw&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" flex hover:scale-125 duration duration-300 h-20 hover:ease-in-out"
            src={twitter}
            href
          />
        </a>{" "}
        <a
          href="https://www.instagram.com/ramanindia9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" flex hover:scale-125 duration duration-300 h-20 hover:ease-in-out"
            src={instagram}
            href
          />
        </a>
        <a
          href="https://github.com/RamanR09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" flex hover:scale-125 duration duration-300 h-20 hover:ease-in-out"
            src={github}
            href
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
