import React from "react";
import "./about.css";
import Awards from '../../img/awards.png'

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
          src="https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam commodi unde? Laborum, veniam cumque!
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, magni eligendi earum quasi quam velit illo molestias ullam necessitatibus? Minima omnis eum sint dignissimos quae accusantium. Quod non vitae molestiae. Yo quiero mucho a Sarah lopez gomora
        </p>
        <div className="a-award">
            <img src={Awards} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">
                    International Design Awards 2020
                </h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est neque recusandae quia nesciunt quos!
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
