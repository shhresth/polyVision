import React, { Component } from 'react'
import Computer from '../Assets/Comp.jpg'
import '../Courses/Courses.css';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';

export default class CO extends Component {
  render() {
    return (
      <>
      
      <Helmet>
  <title>Computer Info Page</title>
  <meta name="description" content='This web page Explains the user about Computer Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/CO" />
      </Helmet>
      
      <div className="c">
        <div className="c-wrap">
          <div className="c-header">
            <h1 className="h1">Computer Engineering</h1>
          </div>
          <div className="c-container">
            <img src={Computer} alt="Banner For Computer Engineering" className="c-image" />
            <div className="c-info">
              <br></br>
              <h2 className="Coh2">What is computer engineering?</h2>
              <p className='p2'>
                A diploma in computer engineering or computer science
                engineering is a 10+2 level of academic programme. It provides
                students with the basic knowledge of computer science,
                mathematics and computing techniques and engineering concepts.
                Students enrolled in the course acquire skills that help them to
                become an IT professional and enter the world of work. The
                duration of the course is three years. It is offered in numerous
                polytechnic institutes. Individuals wishing to enroll in a
                diploma in computer science are required to complete class 10
                from a recognised board. In order to understand the subject, it
                is better that the students have taken the science stream in
                their 10+2 with physics, chemistry and mathematics as primary
                subjects.
              </p>
              <br></br>

              <h2 className="Coh2">What does an computer Engineer do?</h2>

              <p className='p2'>
                A computer engineer may design computer hardware to create
                specialized solutions or new technologies. These jobs involve
                detailed research and design and are at the core of computer
                engineering. Companies like Intel and Samsung hire many computer
                engineers to design devices such as phones, processors and
                routers. There are also many academic positions for computer
                engineering research and education. Computer engineers also work
                on deploying these technologies by installing and updating
                related equipment. Many organizations need computer engineers
                who can design and build computer networks and systems to
                provide them with access to the newest technology. This can
                consist of setting up computer networks, installing new
                components and upgrading old systems.
                {/* <ul>
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
                    Maintain standards of Technical Excellence within the dept.
                  </li>
                  <li>Maximize Efficiency within the Department</li>
                  <li>
                    Ensure full understanding of Products and Services are
                    cascaded through the organization
                  </li>
                </ul> */}
              </p>
              <br></br>
              <h2 className="Coh2">Job Opportunities for computer Engineers</h2>
              <p className='p2'>
                Computer Engineering has always been one of the most in-demand
                job options. This is because the subject is divided into several
                specializations resulting in various job opportunities for
                Computer Engineers. We have heard about how computer engineering
                opens fields and gives you numerous opportunities. If you are
                wondering what to do after engineering in Computer Science, you
                are not alone. It is true that this is a relatively fast-growing
                field and an in-demand career option. Many students get confused
                about what to do after B. Tech in CSE. It’s natural, but there
                is no one answer to that question — and that’s the beauty of it.
                There are multiple career options after the degree and one can
                choose according to their interests and needs — some might be
                interested in good pay, while others opt for a field that’s
                close to their passion or one that lets them explore their
                potential skills. The choice is yours and only you know what you
                wish to pursue; but whatever it may be, we assure you that you
                will find a path that fits you right — whether it’s Data
                Scientist or Cyber Security Specialist — or something else.
              </p>
              <br></br>
              <h2 className="Coh2">Popular Companies that hire computer Engineers</h2>
              <p className='p2'>
                <ul>
                  <li> Google</li>
                  <li> Microsoft</li>
                  <li>Apple </li>
                  <li>Facebook</li>
                  <li>Amazon</li>
                  {/* <li>Philips Semiconductors</li>
                  <li>Nokia</li>
                  <li>Nvdia</li>
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
