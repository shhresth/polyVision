import React, { Component } from 'react'
import '../Courses/Courses.css'
import Civil from '../Assets/CE.jpg'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

export default class CE extends Component {
  render() {
    return (
      <>
      <Helmet>
  <title>CE Info Page</title>
  <meta name="description" content='This web page Explains the user about Civil Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/CE" />
</Helmet>

      <div className="c">
        <div className="c-wrap">
          <div className="c-header">
            <h1 className="h1">Civil Engineering</h1>
          </div>
          <div className="c-container">
            <img src={Civil} alt="Banner For Civil Engineering" className="c-image" />
            <div className="c-info">
              <br></br>
              <h2 className='Coh2'>What is civil engineering?</h2>
              <p className='p2'>
                Diploma in Civil Engineering is a three-year course programme.
                The course is all about planning, designing, executing the
                structures, construction of highways, dams, buildings, and
                satellites. Through this course, students are provided with a
                deep understanding of the civil engineering subject that
                includes academic as well as practical knowledge. Civil
                Engineers are tasked with different concepts, ways to improve
                the infrastructure to meet the current requirements. Candidates
                who are wishing to pursue the Diploma in Civil Engineering
                should have passed their 10th or 12th in Physics, Chemistry, and
                Mathematics. The admission for Diploma in Civil Engineering to
                various colleges is done through merit or students are required
                to clear the entrance examination taken by them.
              </p>
              <br></br>

              <h2 className='Coh2'>What does civil Engineer do?</h2>
              <p className='p2'>
                A civil engineer designs and oversees the construction of public
                works, such as roads, bridges, dams, tunnels, buildings,
                airports, water and sewage systems, and other large
                infrastructure projects. Buildings and bridges are often the
                first structures to come to mind, because they are the most
                obvious engineering creations. But civil engineers are also
                responsible for less visible creations and contributions. Every
                time we open a water faucet, we expect water to come out,
                without thinking that civil engineers made it possible, in many
                cases by designing systems that transport water to cities from
                mountain sources that are sometimes hundreds of miles away.
              </p>

              <br></br>
              <h2 className='Coh2'>Job Opportunities for civil Engineers</h2>
              <p className='p2'>
                Civil engineers conceive, plan, design, construct, operate and
                maintain infrastructure projects and systems in public as well
                as in the private sector. Equal opportunities are available if
                you want to work from the comfort of your office or at site.
                Civil Engineering can be termed as a broad field encompassing a
                diverse collection of specializations and projects. The journey
                from creating living spaces to transforming them into mega
                structures, tall buildings, resilient communities, smart cities,
                creating smart buildings, using smart materials etc to name a
                few will be possible only with a degree in Civil engineering.
                The versatility of this branch is not limited to ground. Whether
                you are working under the ground or above the ground…. Civil
                Engineering is everywhere. The last couple of decades have been
                witnessing occurrences of different types of disasters. Every
                time a disaster hits, the infrastructure is hit…..whether it is
                a building, roads, bridge, highway, this calls for developing
                inclusive and sustainable structures, which requires skilled
                Civil Engineers.
              </p>
              <br></br>
              <h2 className='Coh2'>Popular Companies that hire civil Engineers</h2>
              <p className='p2'>
                <ul>
                  <li> Arup</li>
                  <li> Vinci</li>
                  <li>Mott McDonald </li>
                  <li> Stantec</li>
                  <li> Balfour Beatty</li>
                  <li>Bechtel</li>
                  <li> Skanska</li>
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
