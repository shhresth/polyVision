import React from 'react'
import '../components/FindCou.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import CourseCard from '../components/Card/Coursecard.js'

function FindCou() {
    return (
        <>
            <div className="c">
                


                <div className="c-bottom">


                    <div className="c-left">
                        <div className="c-title">
                            <h5 className="ch5">Filters</h5>
                            <h5 className='c-reset'>Reset Filters</h5>
                        </div>
                        <div className="c-border"></div>
                        <div className="c-filter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cupiditate iure pariatur esse obcaecati, repellendus saepe incidunt perspiciatis omnis deleniti sunt, soluta dolore rerum quam sapiente minus eligendi laborum reprehenderit tempora inventore non voluptatem odit. Voluptates, excepturi obcaecati natus officia voluptatibus pariatur itaque. Eaque delectus sint magnam saepe atque vitae doloremque dolorum ipsa autem distinctio. Consequuntur est, doloremque quod ipsam repellendus assumenda ex, delectus mollitia ullam, neque nobis incidunt eveniet obcaecati! Molestiae velit perspiciatis commodi sint ut iure sed non repellendus, fuga delectus, quae ipsam, inventore quia quaerat voluptate nostrum nam officiis eum nisi recusandae libero! Quasi veniam ab possimus?
                        </div>
                    </div>



                    <div className="c-right">
                        
                        <div className="c-border"></div>
                        <div className="c-cards">
                        <div className="c-container">
                                    <div className="c-row">
                                        <div className="col-md-6">
                                            <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                        <div className="col-md-6">
                                        <CourseCard />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindCou