import React, { Component } from 'react'
import Mechanical from '../Assets/ME.jpg'
import '../Courses/Courses.css'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

export default class ME extends Component {
  render() {
    return (
      <>
      <Helmet>
  <title>Mechanical Info Page</title>
  <meta name="description" content='This web page Explains the user about Mechanical Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/ME" />
</Helmet>      

      <div className="c">
      <div className="c-wrap">
        <div className="c-header">
          <h1 className="h1">Mechanical Engineering</h1>
        </div>
        <div className="c-container">
          <img src={Mechanical} alt="Banner For Mechanical Engineering" className="c-image" />
          <div className="c-info">
            <br></br>
            <h2 className='Coh2'>What is Mechanical engineering?</h2>
            <p className='p2'>
              Diploma in Mechanical Engineering is a three year diploma degree
              programme in mechanical engineering that deals with the various
              applications of physics, designing, analysis, and manufacturing
              of mechanical engineering. The Diploma in Mechanical Engineering
              is a degree programme that can be pursued after completion of
              Class 10. After completing a Diploma in Mechanical Engineering,
              candidates can find various employment opportunities in the
              mechanical industry with entry-level job positions such as
              Mechanical Engineer, Automobile Engineer, and more. Candidates
              can also choose to go for higher studies such as B.Tech in
              Mechanical Engineering for more advanced level jobs.
            </p>
            <br></br>

            <h2 className='Coh2'>What does Mechanical Engineer do?</h2>
            <p className='p2'>
              Mechanical engineers play an important role in the automotive,
              aerospace, biotechnology, computer and electronics, automation,
              and manufacturing industries. They design, develop, build, and
              test all sorts of mechanical devices, tools, engines and
              machines. Mechanical engineers are able to design and
              manufacture everything from small parts like miniature
              connectors, to large machine tools like drill presses. They take
              a product from start to finish, and design for aesthetics,
              functionality, and durability. Examples of products that
              mechanical engineers can design and develop are: transmissions;
              engine parts; aircraft engines; control systems; prosthetic
              devices; disk drives; printers; semiconductor tools; sensors;
              gas turbines; wind turbines; fuel cells; compressors; robots;
              and machine tools.
            </p>

            <br></br>
            <h2 className='Coh2'>Job Opportunities for Mechanical Engineers</h2>
            <p className='p2'>
              A mechanical engineering degree can provide many fulfilling
              opportunities for students. Because of the degree and technical
              knowledge requirements, there is often high demand for
              well-educated engineers. Their skills also lend them to work in
              many sectors and industries like manufacturing, automobile,
              biotechnology, agriculture, national defence and nanotechnology.
            </p>
            <br></br>
            <h2 className='Coh2'>Popular Companies that hire Mechanical Engineers</h2>
            <p className='p2'>
              <ul>
                <li> National Aeronautics and Space Administration</li>
                <li>The Boeing Company</li>
                <li>Lockheed Martin Corporation </li>
                <li> Microsoft</li>
                <li>Ford Motor Company</li>
                <li>United States Department of Energy</li>
                <li>Walt Disney Company</li>
                {/* <li>Nvdia</li>
                <li>HP</li>
                <li>LG Electronics</li> */}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    )
  }
}
