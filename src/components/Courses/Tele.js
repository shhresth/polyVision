import React from "react";
import "../Courses/Courses.css";
import Extc from "../Assets/EleTele.jpg";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const Tele = () => {
  return (
    <>

<Helmet>
  <title>Electronics and Telecommunication Info Page</title>
  <meta name="description" content='This web page Explains the user about Electronics and Telecommunication Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/Tele" />
</Helmet>

      <div>
        <div className="c">
          <div className="c-wrap">
            <div className="c-header">
              <h1 className="h1">
                Electronics and Telecommunication Engineering
              </h1>
            </div>
            <div className="c-container">
              <img src={Extc} alt="Banner For Electronics and Telecommunication Engineering" className="c-image" />
              <div className="c-info">
                <h2 className="Coh2">
                  What is Electronics and Telecommunication Engineering?
                </h2>
                <p className="p2">
                  Electronics and telecommunications engineering is a modern
                  engineering discipline that deals with designing, fabricating,
                  producing, testing and supervising the manufacturing process
                  of complex electronic products and systems. It is a diverse
                  field that encompasses designing and developing traditional
                  analogue technology and high-tech digital
                  components.Electronics and telecommunications engineering
                  helps design products in various industries, such as
                  telecommunications, radio and television, healthcare,
                  utilities, science and personal technology manufacturing.
                </p><br /> <br />
                <h2 className="Coh2">
                  What does an Electronics and Telecommunication Engineer do?
                </h2>
                
                <p className="p2">
                  With the growth of digital strategy, they help the customer
                  either at the field or site for best connectivity. Their work
                  ranges from creating basic circuit design to deploy the
                  wireless network in the field. They are responsible for
                  designing, overseeing the installation of telecom equipment
                  and facilities, such as complex electronic switches, broadband
                  data services, and satellite communications. Showing
                  initiative and keeping up with advancements in
                  Electronics.Some of their responsibilities include:
                  <ul>
                    <li>
                      To attend client location to resolve issues and restore
                      system error.
                    </li>
                    <li>
                      To provide a Remotely diagnose faults from the office via
                      remote access and customer liaison Deliver the best advice
                      on ensuring the correct programming of customer systems
                    </li>
                    <li>
                      Maintain standards of Technical Excellence within the
                      dept.
                    </li>
                    <li>Maximize Efficiency within the Department</li>
                    <li>
                      Ensure full understanding of Products and Services are
                      cascaded through the organization
                    </li>
                  </ul>
                </p>
                <br /> <br />
                <h2 className="Coh2">
                  Job Opportunities for Electronics and Telecommunication
                  Engineers
                </h2>
                <p className="p2">
                  {" "}
                  Most good jobs for ECE students are available in
                  Instrumentation Area. Most of the big companies ask for an
                  experienced person rather then fresher. There are slightly job
                  opportunities for core electronics but relatively more job
                  vacancies for communication(telecommunication). You have to
                  know your main core subject like analog electronics, digital
                  electronics, basic electronics, control system,
                  microprocessor, analog and digital communication, VLSI etc.{" "}
                </p>
                <br /> <br />
                <h2 className="Coh2">
                  Popular Companies that hire Electronics and Telecommunication
                  Engineers
                </h2>
                <p className="p2">
                  <ul>
                    <li>CISCO</li>
                    <li>IBM</li>
                    <li>Samsung Electronics </li>
                    <li>Sony</li>
                    <li>Toshiba</li>
                    <li>Philips Semiconductors</li>
                    <li>Nokia</li>
                    <li>Nvdia</li>
                    <li>HP</li>
                    <li>LG Electronics</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tele;
