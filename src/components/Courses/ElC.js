import React from 'react'
import '../Courses/Courses.css'
import Electronics from '../Assets/Electronicimg.jpg'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

const ElC = () => {
  return (
    <>

<Helmet>
  <title>Electronic Info Page</title>
  <meta name="description" content='This web page Explains the user about Electronics Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/EIC" />
</Helmet>
    
    <div><div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Electronics Engineering</h1>
      </div>
      <div className="c-container">
        <img src={Electronics} alt="Banner For Electronics Engineering" className="c-image" />
        <div className="c-info">
          <h2 className='Coh2'>What is Electronics Engineering?</h2>
          <p className='p2'>
            Electronics Engineering can be defined as the branch of
            engineering that utilises electrical components such as
            semiconductors, transistors, diodes and others to design
            Electronics circuits, devices, integrated circuits and
            electronic systems. The engineers typically also design passive
            electrical components, usually based on printed circuit boards.
            Electronics engineers also test circuits built using various
            electrical components such as resistors, capacitors, inductors
            etc. to achieve a particular functionality. Electronics
            Engineering is considered a subfield of Electrical Engineering.
            Electronics Engineering subjects include Analog Electronics,
            Digital Electronics, Embedded Systems, Power Electronics, etc.
            An academic degree can be acquired from some universities by
            pursuing electronics engineering courses with a major in
            Electronics engineering, while other universities use Electrical
            Engineering as the subject. The term electrical engineer is
            still used in the academic world to include Electronics
            engineers.
          </p>
          <br /> <br />

          <h2 className='Coh2'>What does an Electronics Engineer do?</h2>
          <p className='p2'>
            Electronics engineers use their knowledge to design, develop,
            evaluate, and maintain electronic systems and components. They
            may be employed by small companies or work in commercial
            sectors. Day-to-day duties vary based on the field, but they
            generally design, plan, perform research, inspect the equipment,
            attend conferences, and liaise with others.Some of their
            responsibilities include:
            <ul>
              <li>
                Designing, inspecting, testing, and updating electronic
                systems, components, equipment, and software.
              </li>
              <li>
                Liaising with engineers, other professionals, as well as
                clients to ensure quality projects are completed to
                specifications.
              </li>
              <li>
                Ensuring all equipment and products meet health and safety
                regulations.
              </li>
              <li>
                Observing existing processes and making recommendations for
                improvement.
              </li>
              <li>
                Developing effective maintenance, testing, and quality
                control procedures.
              </li>
              <li>
                Showing initiative and keeping up with advancements in
                Electronics.
              </li>
              <li>
                Monitoring processes, systems, and staff, and punctually
                identifying problems.
              </li>
            </ul>
          </p><br /> <br />

          <h2 className='Coh2'>Job Opportunities for Electronics Engineers</h2>
          <p className='p2'>
            {" "}
            Electronic and electrical engineers are highly employable and
            can find work in many areas, including the electronics,
            automotive, IT, gaming, telecoms, manufacturing, power,
            transport, utilities and construction industries.{" "}
          </p><br /> <br />

          <h2 className='Coh2'>Popular Companies that hire Electronics Engineers</h2>
          <p className='p2'>
            <ul>
              <li>Synopsis</li>
              <li>Kingston</li>
              <li>Bosch </li>
              <li>Sandisk</li>
              <li>Qualcomm</li>
              <li>Mediatek</li>
              <li>Samsung</li>
              <li>Micromax</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div></div>
  <Footer/>
  </>
  )
}

export default ElC