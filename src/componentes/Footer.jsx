import React from "react";

import "../styles/footer.sass";

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="socials">
      <div className="github">
        <a href="https://github.com/ysneshy " target="_blank">
          <AiFillGithub /> ysneshy
        </a>
      </div>
      <div className="instagram">
        <a href="https://www.instagram.com/ysneshy/" target="_blank">
          <AiOutlineInstagram /> ysneshy
        </a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/ysneshy/" target="_blank">
          <AiFillLinkedin /> ysneshy
        </a>
      </div>
    </div>
  );
};

export default Footer;
