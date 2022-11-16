import React from 'react'
import Chem from '../Assets/Chem.jpg'
import '../Courses/Courses.css'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

const Chemical = () => {
  return (
    <>
    
    <Helmet>
  <title>Chemical Info Page</title>
  <meta name="description" content='This web page Explains the user about Chemical Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/Chemical" />
</Helmet>

    <div><div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Chemical Engineering</h1>
      </div>
      <div className="c-container">
        <img src={Chem} alt="Banner For Chemical Engineering" className="c-image" />
        <div className="c-info">
          <h2>What is Chemical Engineering?</h2>
          <p className='p2'>
            Chemical engineering involves the production and manufacturing
            of products through chemical processes. This includes designing
            equipment, systems, and processes for refining raw materials and
            for mixing, compounding, and processing chemicals. Chemical
            engineers translate processes developed in the lab into
            practical applications for the commercial production of
            products, and then work to maintain and improve those processes.
            They rely on the main foundations of engineering: math, physics,
            and chemistry. Biology also plays an increasingly important
            role.
          </p>
          <br /> <br />
          <h2 className='Coh2'>What does an Chemical Engineer do?</h2>

          <p className='p2'>
            Broadly, chemical engineers conceive and design processes
            involved in chemical manufacturing. The main role of chemical
            engineers is to design and troubleshoot processes for the
            production of chemicals, fuels, foods, pharmaceuticals, and
            biologicals, to name just a few. They are most often employed by
            large-scale manufacturing plants to maximize productivity and
            product quality while minimizing costs. Roles and
            responsibilities of rubber engineer:
            <ul>
              <li>
                Ensuring compliance with health, safety, and environmental
                regulations
              </li>
              <li>
                Conducting research into improved manufacturing processes
              </li>
              <li>Designing and planning equipment layout</li>
              <li>
                Incorporating safety procedures for working with dangerous
                chemicals
              </li>
              <li>
                Monitoring and optimizing the performance of production
                processes
              </li>
              <li>Estimating production costs</li>
            </ul>
          </p>
          <br /> <br />
          <h2 className='Coh2'>Job Opportunities for Chemical Engineers</h2>
          <p className='p2'>
            {" "}
            Chemical engineers work mostly in offices or laboratories. They
            may spend time at industrial plants, refineries, and other
            locations, where they monitor or direct operations or solve
            onsite problems. Nearly all chemical engineers work full time.
            They can work in a variety of industries including:
            <ul>
              <li>energy</li>
              <li>food and drink</li>
              <li>oil and gas</li>
              <li>pharmaceuticals</li>
              <li>plastics</li>
              <li>toiletries</li>
              <li>water treatment</li>
            </ul>
          </p>
          <br /> <br />
          <h2 className='Coh2'>Popular Companies that hire Chemical Engineers</h2>
          <p className='p2'>
            <ul>
              <li>IOCL ( Indian Oil Corporation Limited )</li>
              <li>HPCL ( Hindustan Petroleum Corporation Limited )</li>
              <li>BPCL ( Bharat Petroleum Cororation Limited )</li>
              <li>ONGC ( Oil and Natural Gas Corporation ) </li>
              <li>GAIL ( Gas Authority of India Limited )</li>
              <li>NALCO ( National Aluminium Corporation Limited )</li>
              <li>BARC ( Bhabha Atomic Research Centre )</li>
              <li>
                DRDO ( Defence Research and Development Organisation )
              </li>
              <li>ISRO ( Indian Space Reseach Organisation )</li>
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

export default Chemical