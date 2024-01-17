import React from "react";
import "./style1.css";
import { socialprofils,socialicons } from "../../content_option";
export const Socialicons = (params) => {
  return (
    <div >
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <img className="imgicon" src={socialicons.github} height='30px' width='30px'></img>
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
            <img  src={socialicons.instagram} height='30px' width='30px'></img>
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
            <img src={socialicons.linkedin} height='30px' width='30px'></img>
            </a>
          </li>
        )}
      </ul>
    </div>
    </div>
  );
};
