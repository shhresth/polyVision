import React from "react";
import { FaBook, FaGlobe, FaPencilRuler, FaPencilAlt } from "react-icons/fa";
import "../components/About.scss";
// import BG from '../images/bg4.jpg'
import BG from "./Assets/bg.jpeg";
import Footer from "./Footer";
// import BG from '../images/bg3.jpg'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about1">
          <div className="left">
            <div className="head1">
              <h1 style={{ fontSize: "2rem", "font-weight": "bold" }}>
                We are a team of student developers.
              </h1>
            </div>

            <div className="head2">
              <h2 className="ah2">
                We know what students demand... <br />
                <br />
                We are here to empower the career of such students.
              </h2>
            </div>
          </div>
          <div className="right">
            <div className="right-image">
              <img src={BG} alt="back" className="Abimg" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="aboutTwo" id="about-2">
          <div className="content-box-lg">
            <div className="container">
              <div className="main1">
                <div className="firstMission">
                  <div className="about-item text-center" id="Mission">
                    <div className="icon">
                      <i className="fa fa-book">
                        <FaBook />
                      </i>
                    </div>

                    <div className="item-heading">
                      <h3 className="abh3">Our Mission</h3>
                    </div>

                    <div className="line">
                      <hr />
                    </div>

                    <p className="item-con">
                      Our mission is to showcase the numerous carrier
                      opportunities in the technical domain to the SSC passed
                      students.
                    </p>
                  </div>
                </div>

                <div className="secondVision">
                  <div className="about-item text-center" id="Vision">
                    <div className="icon">
                      <i className="fa fa-book">
                        <FaGlobe />
                      </i>
                    </div>

                    <div className="item-heading">
                      <h3 className="abh3">Our Vision</h3>
                    </div>
                    <div className="line">
                      <hr />
                    </div>
                    <p className="item-con">
                      Our vision is to make the students to survive in the
                      technical world by developing and enriching their
                      technical skills.
                    </p>
                  </div>
                </div>
                <div className="thirdValues">
                  <div className="about-item text-center" id="Values">
                    <div className="icon">
                      <i className="fa fa-book">
                        <FaPencilRuler />
                      </i>
                    </div>

                    <div className="item-heading">
                      <h3 className="abh3">Our Values</h3>
                    </div>

                    <div className="line">
                      <hr />
                    </div>

                    <p className="item-con">
                      We always try to add the value to the educational domain
                      of the students.Our efforts are always towards bright
                      future of students.
                    </p>
                  </div>
                </div>

                {/* <div className="col-md-4"> */}

                {/* </div> */}

                {/* <div className="col-md-4"> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default About;
