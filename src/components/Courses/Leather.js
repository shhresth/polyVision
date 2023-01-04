import React from 'react'
import '../Courses/Courses.css'
import Leath from '../Assets/Leath.jpg'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

const Leather = () => {
  return (
    <>
    
    <Helmet>
  <title>Leather Info Page</title>
  <meta name="description" content='This web page Explains the user about Leather Engineering and its Job Opportunites'></meta>
  <link rel="canonical" href="/Leather" />
</Helmet>

    <div><div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Leather Technology</h1>
      </div>
      <div className="c-container">
        <img src={Leath} alt="Banner For Leather Engineering" className="c-image" />
        <div className="c-info">
          <h2 className='Coh2'>What is Leather Technology?</h2>
          <p className='p2'>
            Leather Technology is a branch of engineering which deals with
            synthesis, production and refining of leather so that it can be
            put into efficient use. It also deals with the synthesis of
            artificial leather and its efficient use to make commercial
            goods. It is comparatively a new branch which is gaining
            importance in industrial sector.The demand of the leather goods
            is on the rise and is expected to grow further. With more and
            more multinationals coming to India, this industry is poised to
            become a hi-tech industry.
          </p>
          <br /> <br />
          <h2 className='Coh2'>What does an Leather Engineer do?</h2>

          <p className='p2'>
            Leather goods industrial engineers analyse product technical
            specifications, define productive operations and its sequence,
            refine working methods, calculate operative times by using time
            measurement techniques. They address human and technological
            resources to each operation and define distribution of work
            according to production capacity. All their activities and tasks
            have the objective of maximising productivity and reducing
            production costs, assuring the functionality and quality of
            product and customer satisfaction.Some of their responsibilities
            include:
            <ul>
              <li>
                Measure working time in footwear and leather goods
                production
              </li>
              <li>Use communication techniques</li>
              <li>Reduce environmental impact of footwear manufacturing</li>
              <li>
                Apply methods for footwear and leather goods manufacturing
              </li>
              <li>
                Calculate the productivity of the production of footwear and
                leather goods
              </li>
              <li>
                Communicate commercial and technical issues in foreign
                languages
              </li>
            </ul>
          </p><br /> <br />

          <h2 className='Coh2'>Job Opportunities for Leather Engineers</h2>
          <p className='p2'>
            {" "}
            They are involved in footwear and accessories designing by
            cutting, pattern designing of the product manufactured such as
            belt, bags, purses and much more. The government is aiming at
            enlarging the leather industry with the tag "Made in India" as
            the brand tag for exports. One can work abroad when he/she
            specialises and gains experience and skills in this field with
            the required courses completed.{" "}
          </p><br /> <br />

          <h2 className='Coh2'>Popular Companies that hire Leather Engineers</h2>
          <p className='p2'>
            <ul>
              <li> A V Thomas Leather and Allied Products Limited</li>
              <li>Bhartiya International Limited</li>
              <li>Tata Leather</li>
              <li>Arkay Leathers Private Ltd.</li>
              <li>Toshiba</li>
              <li>Prag International </li>
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

export default Leather