import React, { useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('Rakshit');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="text-center mt-5">Hello, I'm {name}</h1>
          <p className="lead text-center">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data.</p>
          <h2 className="text-center mb-4">Product Designer</h2>
          <button onClick={toggleVisibility} className="btn btn-primary">Toggle Visibility</button>
          {isVisible && <p className="mt-3">This content is visible!</p>}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
          <h2>MY SKILLSET</h2>
          <p>Graphic Design, Interface Design & User Experience</p>
          <h2>MY PROCESS</h2>
          <p>I specialize in building complex web applications, leading front-end teams, digital product design, and developing visual design systems. I enjoy creating effortless user experience and designing delightful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up every day!</p>
          <h2>Recent Projects</h2>
          <ul>
            <li><a href="#">WemaMobile</a></li>
            <li><a href="#">Xchangewise</a></li>
            <li><a href="#">Kisi Security</a></li>
            <li><a href="#">FBN</a></li>
            <li><a href="#">VizarHomes</a></li>
          </ul>
          <h2>Career</h2>
          <p>DriveMe Fleets - Ux Consult / Designer (Mar 2019 - Present)</p>
          <p>Meaningfulgigs - Creative Director (Dec 2017 - Present)</p>
          <p>AlatbyWema - Product Designer (Feb 2017 - Mar 2018)</p>
          <p>Mckinsey - Ui Designer (Aug 2016 - Feb 2017)</p>

          
          <h2>About Me</h2>
          <p>Designing with passion for Problem Solving</p>
          <p>FOLLOW ME INSTAGRAM</p>
          <p>I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies. Other than sitting in front of my display, I enjoy myself in casual sports, such as bowling or playing football with friends.</p>
          <p>I'm grateful that my job allows me to work from anywhere. I’m active on Instagram where I share most of the and all info about my upcoming projects.</p>
          <p>I also like sharing my experiences on Instagram</p>

          <h2>Case Studies</h2>
          <ul>
            <li><a href="#">Soovu</a></li>
            <li><a href="#">FirstbankQuest</a></li>
          </ul>
          <h2>WHAT'S NEXT</h2>
          <p>Lets work together!</p>
          <p>If you'd like to talk about a project you want help with or need advice about product design, just drop me a message at <a href="mailto:nathan@ojieame.design">nathan@ojieame.design</a></p>
          <p>I'm currently Available for any design systems projects, dashboard designs, or landing pages gigs.</p>
          <a href="mailto:nathan@ojieame.design" className="btn btn-primary">WRITE ME AN EMAIL</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
