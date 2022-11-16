import React from "react";
import Autom from "../Assets/Autom.jpg";
import "../Courses/Courses.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const Automobile = () => {
  return (
    <>
<Helmet>
  <title>AutoMobile Info Page</title>
  <meta name="description" content='This web page Explains the user about AutoMobile Engineering and itsJob Opportunites'></meta>
  <link rel="canonical" href="/Automobile" />
</Helmet>

      <div>
        <div className="c">
          <div className="c-wrap">
            <div className="c-header">
              <h1 className="h1">Automobile Engineering</h1>
            </div>
            <div className="c-container">
              <img src={Autom} alt="Banner For Automobile Engineering" className="c-image"/>
              <div className="c-info">
                <h2 className="Coh2">What is Automobile Engineering?</h2>
                <p className="p2">
                  Automobile engineering is a branch that deals with the
                  designs, manufacture, as well as operation of mechanical
                  mechanisms of automobiles. It is also an introduction to
                  vehicle engineering, which includes cars, motorcycles, trucks
                  & buses, etc.
                </p>
                <br /> <br />
                <h2 className="Coh2">What does an Automobile Engineer do?</h2>
                <p className="p2">
                  Automotive engineers must apply their engineering skills
                  professionally because their innovations and solutions must be
                  effective and profitable. His specific responsibilities
                  include:
                  <ul>
                    <li>
                      Research, design, develop and produce vehicles and
                      components.
                    </li>
                    <li>
                      Preparation of cost estimates and design specifications.
                    </li>
                    <li>Preparation of plans and drawings.</li>
                    <li>
                      Analyzing the energy, environmental, and safety aspects of
                      the planned project.
                    </li>
                    <li>
                      Predicting vehicle or component behavior under various
                      conditions using computerized models.
                    </li>
                    <li>
                      Developing Testing Procedures. Investigating product
                      failures.
                    </li>
                    <li>
                      Analyzing, interpreting, & condensing technicals data into
                      reports or presentations Supervises technical staff.
                    </li>
                  </ul>
                  Apart from the above instrumentation engineers also find
                  employment in companies that utilize specialized instruments
                  for their day-to-day operations.
                </p>
                <br /> <br />
                <h2 className="Coh2">
                  Job Opportunities for Automobile Engineers
                </h2>
                <p className="p2">
                  {" "}
                  Automotive engineers are employed by car and truck
                  manufacturers as well as parts suppliers to design and build
                  entire vehicles or individual parts or systems. They may work
                  on the vehicle’s engine design, aerodynamics, performance and
                  fuel efficiency, safety features, ergonomics, and more.{" "}
                </p>
                <br /> <br />
                <h2 className="Coh2">
                  Popular Companies that hire Automobile Engineers
                </h2>
                <p className="p2">
                  <ul>
                    <li>TATA Motors</li>
                    <li> Mahindra and Mahindra</li>
                    <li>Toyota</li>
                    <li>Honda</li>
                    <li>Ford</li>
                    <li>Eicher Motors</li>
                    <li>Escorts</li>
                    <li>Bajaj Auto Limited</li>
                    <li>Maruti Udyog Limited</li>
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

export default Automobile;
