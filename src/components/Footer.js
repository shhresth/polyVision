import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaTelegramPlane,
} from "react-icons/fa";
import '../components/Footer.css'


const Footer = () => {
  return (
    <div><div className="section1">
    <div className="container">
        <div className="up">
            <a href='#' className='upward'></a>
        </div>
        <div className="main1">
            <div className="first">
                <h4 className='fh4'><b>Polyvision</b></h4>
                <p className='fp'>
                    We are here to help the students who have recently passed their
                    SSC exams and are looking to kickstart their career in more
                    professional courses rather than having only theoratical knowledge.
                </p>
            </div>
            <div className="second">
                <h4 className='sh4'><b>Let's Communicate</b></h4>
                <a
                    class="btn btn-outline-primary btn-floating m-4"
                    href="#!"
                    role="button"
                >
                    <FaFacebookSquare style={{ fontSize: "2rem" }} />
                </a>
                <a
                    class="btn btn-outline-success btn-floating m-3"
                    href="#!"
                    role="button"
                >
                    <FaInstagramSquare style={{ fontSize: "2rem" }} />
                </a>
                <a
                    class="btn btn-outline-info btn-floating m-4"
                    href="#!"
                    role="button"
                >
                    <FaTelegramPlane style={{ fontSize: "2rem" }} />
                </a>
                <a
                    class="btn btn-outline-danger btn-floating m-4"
                    href="#!"
                    role="button"
                >
                    <FaYoutubeSquare style={{ fontSize: "2rem" }} />
                </a>
            </div>
            <div className="third">
                <h4 className='fh4'><b>Who we are?</b></h4>
                <p className='fp'>
                    We are the college students currently pursuing our diploma in
                    Computer Engineering. Our dream is to build powerful and
                    useful websites that will help to solve real world Problems.
                </p>
            </div>
        </div>
        <div className="copyright">
            <p className='cp'>
                Copyright &copy; PolyVision 2022 Inc. All Rights Reserved.
            </p>
        </div>
    </div>
</div></div>
  )
}

export default Footer