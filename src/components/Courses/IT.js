import React, { Component } from 'react'
import '../Courses/Courses.css'
import ITimg from '../Assets/IT.jpg'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'


export default class IT extends Component {
  render() {
    return (
      <>
      
      <Helmet>
  <title>IT Info Page</title>
  <meta name="description" content='This web page Explains the user about Information Technology and its Job Opportunites'></meta>
  <link rel="canonical" href="/IT" />
</Helmet>

      <div className="c">
        <div className="c-wrap">
          <div className="c-header">
            <h1 className="h1">Information Technology</h1>
          </div>
          <div className="c-container">
            <img src={ITimg} alt="Banner For IT" className="c-image" />
            <div className="c-info">
              <br></br>
              <h2 className='Coh2'>What is IT engineering?</h2>
              <p className='p2'>
                Diploma in IT or Diploma in Information Technology is a one to
                three-year course. The course programme focuses on IT
                technologies, its applications, computer, IT engineering,
                amongst others. Information technology involves study, including
                computer systems, which can store, recover, manipulate data, and
                share communication. The diploma course encompasses concepts
                such as applied mathematics, physics, chemistry, C programming,
                system analysis, digital electronics, and many more. Colleges
                offering Diploma in IT require certain eligibility criteria that
                students have to meet to get eligible for the program.
                Admissions to top colleges are done through merit-based or
                through entrance examinations. Students must have completed
                Class 10th or 12th for pursuing a Diploma in IT. The program
                opens ample opportunities in various fields depending on the
                interest and choice of students for popular roles such as IT
                program, Software developer, IT specialist, IT programmer,
                technical consultant, web developer, ICT system administrator,
                and others.
              </p>
              <br></br>

              <h2 className='Coh2'>What does IT Engineer do?</h2>
              <p className='p2'>
                An IT engineer's duties vary based on the company they work for,
                the credentials they have and other factors. However, here are
                some typical IT engineer responsibilities:
                <ul>
                  <li>
                    {" "}
                    Diagnose and resolve computer and technology-related issues
                  </li>
                  <li>
                    {" "}
                    Identify which improvements and upgrades to make to computer
                    systems
                  </li>
                  <li>
                    Manage projects and coordinate with other IT employees{" "}
                  </li>
                  <li>
                    {" "}
                    Document and report solutions to clients, managers and other
                    stakeholders
                  </li>
                  <li>
                    {" "}
                    Work with clients to identify their technological and
                    software needs
                  </li>
                  <li>
                    Design, configure and test custom computer systems for
                    clients
                  </li>
                  <li> Conduct research and coding to develop new software</li>
                </ul>
              </p>

              <br></br>
              <h2 className='Coh2'>Job Opportunities for IT Engineers</h2>
              <p className='p2'>
                An IT Engineer works long hours to resolve critical issues such
                as troubleshooting malfunctioning of software applications or
                repairing hardware equipment. His or her work responsibilities
                include writing reports, creating documentation and
                instructional manuals. The role of IT Engineer demands strong
                communication skills as well as technical knowledge. He or she
                is required to discuss system needs with IT manager and work
                according. Besides fixing hardware, software and networking
                issues, an IT Engineer has to provide training to staff of
                functioning on newly installed hardware and software systems. He
                or she has to ensure security software is up to date.
              </p>
              <br></br>
              <h2 className='Coh2'>Popular Companies that hire IT Engineers</h2>
              <p className='p2'>
                <ul>
                  <li>Tata Consultancy Services</li>
                  <li> Accenture</li>
                  <li>Cognizant </li>
                  <li> Infosys</li>
                  <li> Capgemini</li>
                  <li>Wipro</li>
                  <li> IBM</li>
                  <li>Deloitte</li>
                  {/* <li>HP</li>
                  <li>LG Electronics</li>  */}
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
