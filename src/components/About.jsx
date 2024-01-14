import React from "react";
import "./about.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <div className="thumbnail"></div>
      </div>
      <div className="about-content">
        <div className="section-title">
          <h2 className="title">About Me</h2>
          <p className="description">
          I am a College Student, also I'm Information Technology in 3rd Year..This Porfolio have a sample product
          As a Front End-Developer is Hard for me because i confused a styles css specially this React js during set 
          up is I dont know how to code because it familaries the styles, Components, img.
          </p>
        </div>

        {/* tabs-area */}
        <div className="tabs-area">
            <Tabs>
              <TabList className="tab-style">
                <Tab className="tabs">Skills</Tab>
                <Tab className="tabs">Experience</Tab>
                <Tab className="tabs">Education</Tab>
              </TabList>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/service">
                        Coding <span> - in Html and</span>
                      </a>
                       Css 
                    </li>
                    <li>
                      <a href="/service">
                        React js<span> - Creating a Website</span>
                      </a>
                      like Halo halo..
                    </li>
                    <li>
                      <a href="/service">
                        Creatin a System <span> - in Java</span>
                      </a>
                      example is Book System
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
              <div className="single-tab-content">
                <ul>
                  <li>
                    <a href="/service">Playing Basketball<span> - in my house only</span></a> with my cousin</li><li>
                    <a href="/service">Crush<span> - in Senior High School</span></a> The name start Mariel</li><li>
                    <a href="/service">Wash a Plate<span> - my house </span></a> 2016</li>
                </ul>
              </div>
              </TabPanel>

              <TabPanel>
                <div className="single-tab-content">
                  <ul>
                    <li>
                      <a href="/service">Grade 6<span> - Danlugan Pag. City</span></a> 2015</li><li>
                      <a href="/service">Grade 10<span> - Dumalinao National High School</span></a> 2019</li><li>
                      <a href="/service">Grade 12<span> - Dumalinao National High School</span></a> 2021</li>
                  </ul>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;
