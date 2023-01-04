import React from 'react'
import Electric from '../Assets/Electric.jpg'
import '../Courses/Courses.css'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

const Electrical = () => {
  return (
    <>
    
    <Helmet>
  <title>Electrical Info Page</title>
  <meta name="description" content='This web page Explains the user about Electrical Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/Electrical" />
</Helmet>

    <div><div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Electrical Engineering</h1>
      </div>
      <div className="c-container">
        <img src={Electric} alt="Banner For Electrical Engineering" className="c-image" />
        <div className="c-info">
          <h2 className='Coh2'>What is Electrical Engineering?</h2>
          <p className='p2'>
            Electrical engineering is one of the newer branches of
            engineering, and dates back to the late 19th century. It is the
            branch of engineering that deals with the technology of
            electricity. Electrical engineers work on a wide range of
            components, devices and systems, from tiny microchips to huge
            power station generators.Since its early beginnings, the field
            of electrical engineering has grown and branched out into a
            number of specialized categories, including power generation and
            transmission systems, motors, batteries and control systems.
            Electrical engineering also includes electronics, which has
            itself branched into an even greater number of subcategories,
            such as radio frequency (RF) systems, telecommunications, remote
            sensing, signal processing, digital circuits, instrumentation,
            audio, video and optoelectronics.
          </p><br /> <br />

          <h2 className='Coh2'>What does an Electrical Engineer do?</h2>

          <p className='p2'>
            Electrical engineers apply the principles of electricity,
            electronics, and electromagnetism to develop electrical products
            and systems. They perform risk assessments and ensure compliance
            with safety standards and electrical engineering codes. They
            also conduct research to create new applications. Roles and
            responsibilities of rubber engineer:
            <ul>
              <li>
                Designing and improving electrical products and systems
              </li>
              <li>Establishing manufacturing processes</li>
              <li>
                Evaluating systems’ safety, reliability, and performance
              </li>
              <li>
                Develop manufacturing processes according to global
                engineering codes and standards
              </li>
              <li>
                Collaborate with engineers and technicians to design and
                apply new system processes
              </li>
              <li>
                Perform quality and performance analysis on new and legacy
                IT systems
              </li>
            </ul>
          </p><br /> <br />

          <h2 className='Coh2'>Job Opportunities for Electrical Engineers</h2>
          <p className='p2'>
            {" "}
            Electrical engineers are always in high demand in some private
            companies as well as plenty of vacancies in government sector.
            Almost all PSUs need electrical engineers. Government
            organisations such as DRDO and ISRO recruit electrical engineers
            regularly. Plenty of opportunities for freshers and experienced
            alike. An electrical engineer should also possess intermediate
            to advance level skill of a useful programming language
            (Python/C++ etc) so that their skill set can match wider
            requirements.{" "}
          </p><br /> <br />

          <h2 className='Coh2'>Popular Companies that hire Electrical Engineers</h2>
          <p className='p2'>
            <ul>
              <li>TATA power</li>
              <li>Schneider electric India Pvt LTD</li>
              <li>Bajaj electricals.</li>
              <li>Siemens </li>
              <li>Alstom</li>
              <li>Crompton Greaves</li>
              <li>Havells</li>
              <li>ABB group</li>
              <li>Kirloskar electric co. Ltd</li>
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

export default Electrical