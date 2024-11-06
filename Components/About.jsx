import React from 'react'
import './About.css'

function About() {
  return (
    <div className='cls-about'>
        <div className="cls-about-title">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className="cls-about-section">
            <div className="cls-about-left">
                <img src="" alt="" />
            </div>
            <div className="cls-about-right">
                <div className="cls-about-para">
                    <p>As a passionate Frontend Developer, I specialize in creating engaging and responsive user interfaces. My expertise includes working with modern technologies such as HTML, CSS, and JavaScript to build seamless and intuitive web experiences.</p>
                    <p>My proficiency spans across a diverse array of frontend technologies, with a strong emphasis on delivering top-notch user experiences. I focus on creating responsive layouts and optimizing performance to ensure that every project meets both user needs and business goals effectively.</p>
                </div>
                <div className="cls-about-skills">
                    <div className="cls-about-skill">
                        <p>HTML</p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>CSS</p><hr style={{width:"95%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>C++</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>JavaScript</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>Java</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>Node js</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>Tailwind Css</p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="cls-about-skill">
                        <p>Mongos</p><hr style={{width:"70%"}}/>
                    </div>
                </div>
                <div className="cls-about-achievements">
                    <div className="cls-about-achievement">
                        <h1>1+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="cls-about-achievement">
                        <h1>10+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr />
                    <div className="cls-about-achievement">
                        <h1>1+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;