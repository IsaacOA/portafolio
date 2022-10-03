import React from "react";
import "./intro.css";
import Elon from '../../img/elon.png'

export const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is Isaac</h2>
          <h1 className="i-name">Isaac Ortega</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web Devoloper</div>
                <div className="i-title-item">Student</div>
                <div className="i-title-item">Front-end</div>
                <div className="i-title-item">Athlete</div>
                <div className="i-title-item">Autodidact</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, exercitationem recusandae animi eos, molestias sapiente optio sunt voluptas obcaecati earum ratione natus repudiandae facere odit.
          </p>
        </div>
        
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img className="i-img" src={Elon} alt=""/>
      </div>
    </div>
  );
};
