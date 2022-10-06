import React from "react";
import "./about.css";
import Curso from "../../img/curso.png";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Since I was 15 years old I learned to program in high school. I am
          currently studying computer engineering at the IPN, UPIICSA. My name
          is Isaac and I'm 23 years old.
        </p>
        <p className="a-desc">
          I am interested in front-end technologies, databases and
          cybersecurity. I'm learning a lot of technologies every day yet, I
          like to learn new things. My favorite hobby is sports, it's something
          that was instilled in me since I was a child. By the way I practice
          TKD since 6 years old. I like it.
        </p>
        <div className="a-award">
          <img
            src={Curso}
            alt=""
            className="a-award-img"
            href="https://www.udemy.com/certificate/UC-bfb129ca-047b-4e8c-936b-c72b58d2a5de/"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Profesional Desing Web | Practical course from cero
            </h4>
            <p className="a-award-desc">
              This was my first course that I lerned! HTML, CSS, JS, BOOTSTRAP,
              SASS, RESPONSIVE and another things.{" "}
              <a href="https://www.udemy.com/certificate/UC-bfb129ca-047b-4e8c-936b-c72b58d2a5de/">
                Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
