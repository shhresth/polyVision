import React from 'react';
import { Carousel } from "react-bootstrap"
import '../components/Home.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import FYC from './FilterA/FYC';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';


function IndividualIntervalsExample() {
  const navigate = useNavigate();

  const coursesPage = () => {
    navigate("/FYC")
  }
  return (
<>    


<Helmet>
  <title>Homepage</title>
  <meta name="description" content='polyVision makes the gruesome task of finding Diploma Colleges Easy and more personalized.It contains the Data of all the Polytechnic Colleges in Maharashtra So that you get the college which you like!'></meta>
  <link rel="canonical" href="/" />
</Helmet>

    <Carousel>

      <Carousel.Item >
        <div className="main-bg">
          <div className="bg">
            <div className="lefth1">
              <h1 className="h"><b>Take first Step</b></h1>
              <h2 className="h2"><b>Towards Your Bright Future With Us</b></h2>
              <div className='btnh'>

                <button onClick={coursesPage} className='sbtn1'>Find College</button>
                <Routes>
                  <Route path="/FYC" element={<FYC />} />
                </Routes>

               

              </div>
              <h3 className="h3"><b>Choose from over more than 350 colleges<br /> and more than 12 fields</b></h3>
            </div>
            <div className="right1">
              <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=826&t=st=1664094586~exp=1664095186~hmac=b37b48ac97e482680e28d075778df06df1c994a1cca4ca19550264534aa07bf1" className='sl' alt='Generic Image'></img>
            </div>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item >
        <div className="main-bg">
          <div className="bg">
            <div className="lefth1">
              <h1 className="hh1"><b>Why choose Polytechnic Diploma ?</b></h1>
              <p className='p'>Diploma course is more practical rather than theory and it helps students to become a junior<br /> engineer.  It is quite suitable for students to prove their competency and skills for industrial jobs.<br /> Diploma is very useful for everyone. This course can be Cost and time saving.<br />
                <br />1.Diploma make you job ready.<br />
                2.Diploma students are more likely to be hired.<br />
                3.Diploma can be completed in significantly less time .<br />
                4.Diploma come at a fraction of the cost </p>
            </div>
            <div className="right1">
              <img src="https://img.freepik.com/free-vector/empowering-education_3446-308.jpg?w=740&t=st=1664097927~exp=1664098527~hmac=68f100185cabef965949356ad30ec3df0c0ffb20862be514c24d097bf94becff" className="sl" alt='Generic Image'></img>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className="main-bg">
          <div className="bg">
            <div className="lefth1">
              <h1 className="hhh1"><b>Lot's Of Career Oppotunities</b></h1>
              <p className='p1'><b>1.Going For Higher Studies:</b>The first option is to go for higher studies after completing Polytechnic.This will help the students gain morex advanced knowledge in the field which,further,will open new carrer opportunities for the students.
                <br /><b>2.Going For a Job:</b>If the student does not want to go for higher studies,he/she can also go directly for job recruitment in either private or government sectors.This will help the students to gain expierience in the field and get promotedlater on the basis of their expertise. </p>
            </div>
            <div className="right1">
              <img src="https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg?w=1060&t=st=1664089453~exp=1664090053~hmac=1c82d4032f21b9b3f79650dba247d0dd8a0540756c439c10ce5c82c6ad4aca12" className='sl1' alt='Generic Image'></img>
            </div>
          </div>
        </div>
      </Carousel.Item>

    </Carousel>
<Footer></Footer>
    </>

  );

}

export default IndividualIntervalsExample; 