import React from 'react'
import '../Courses/Courses.css'
import Instrument from '../Assets/Instrument.jpg'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

const Instrumentation = () => {
  return (
    <>

    <Helmet>
  <title>Instrumentation Info Page</title>
  <meta name="description" content='This web page Explains the user about Instrumentation Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/Instrumentation" />
    </Helmet>
    
    <div><div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Instrumentation Engineering</h1>
      </div>
      <div className="c-container">
        <img src={Instrument} alt="Banner For Instrumentation Engineering" className="c-image" loading='lazy'/>
        <div className="c-info">
          <h2 className='Coh2'>What is Instrumentation Engineering?</h2>
          <p className='p2'>
            Instrumentation engineering is the branch of engineering that
            specialises on the principle and operation of measuring
            instruments that are used in fields of design, configuration of
            automated systems in electrical, pneumatic domains, etc.
          </p>
          <br /> <br />
          <h2 className='Coh2'>What does an Instrumentation Engineer do?</h2>
          <p className='p2'>
            {" "}
            The required tasks are very domain dependent; instrumentation
            engineers typically work for industries with automated process
            with the goal of improving the productivity, reliability,
            safety, optimisation and stability. Instrumentation engineers
            are commonly responsible for integrating the sensors with the
            recorders, transmitters, displays or control systems. They may
            design or specify installation, wiring and signal conditioning.
            They may be responsible for calibration, testing and maintenance
            of the system.{" "}
          </p><br /> <br />

          <h2 className='Coh2'>Job Opportunities for Instrumentation Engineers</h2>
          <p className='p2'>
            Instrumentation engineers find employment in industries which
            improve efficiency, stability and safety of automated processes.
            The industrial sectors include
            <ul>
              <li>Public/Private firms</li>
              <li>R&D organizations</li>
              <li>Steel plants</li>
              <li>Cement manufacturing companies</li>
              <li>Thermal power plants</li>
              <li>Chemical companies and similar industries.</li>
            </ul>
            Apart from the above instrumentation engineers also find
            employment in companies that utilize specialized instruments for
            their day-to-day operations.
          </p>
          <br /> <br />
          <h2 className='Coh2'>Popular Companies that hire Instrumentation Engineers</h2>
          <p className='p2'>
            <ul>
                <li>NationalInstruments</li>
                <li>ABB</li>
                <li>Larsen & Tourbo</li>
                <li>Robert Bosch</li>
                <li>Invensys</li>
                <li>GE</li>
                <li>Suzlon</li>
                <li>Apna Technologies</li>
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

export default Instrumentation