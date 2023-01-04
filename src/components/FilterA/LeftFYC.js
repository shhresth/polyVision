import React from 'react'
import { GrClose } from 'react-icons/gr'
import Select from 'react-select'

function LeftFYC(props) {
    return (
        <>
            {
                props.isShown && (
                    <div className="f-left">
                        <div className="f-title">
                            <h5>Filters</h5>
                            <h5 className='reset'  onClick={props.reset}>Reset Filters</h5>
                        </div>
                        <div className="f-border"></div>
                        <div className="f-filter">
                            <div className="f-close">
                                <GrClose onClick={props.closeMe} />
                            </div>
                            <label htmlFor="Region">Region</label>
                                    <Select options={props.region} id="Region" onChange={(selectedOptions) => props.setSelectedRegion(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor="district">District</label>
                                    <Select options={props.district} id="district" onChange={(selectedOptions) => props.setSelectedDistrict(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor="dept">Course</label>
                                    <Select options={props.depts} id="dept" onChange={(selectedOptions) => props.setSelectedCourse(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor='fees'>Fees </label>
                                    <Select options={props.Fees} id="fees" onChange={(selectedOptions) => props.setSelectedFees(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor='caste'>Caste</label>
                                    <Select options={props.caste} id="caste" onChange={(selectedOptions) => props.setSelectedCaste(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor='marks'>SSC Marks</label>
                                    <Select options={props.Marks} id="marks" onChange={(selectedOptions) => props.setSelectedMarks(selectedOptions.value)}></Select>
                                    <br />

                                    <label htmlFor="College_Status">College Status</label>
                                    <div className="cc">
                                        <div className="c1">
                                            <input type='radio' name='c' id='gov' value="Government" onChange={(e) => props.setSelectedCollegeStatus(e.target.value)} />
                                            <label htmlFor="gov" className='c-label'>Government</label>
                                        </div>
                                        <div className="c2">
                                            <input type='radio' name='c' id='pvt' value="Private" onChange={(e) => props.setSelectedCollegeStatus(e.target.value)} />
                                            <label htmlFor="pvt" className='c-label'>Private</label>
                                        </div>
                                    </div>
                                    <br />

                                    <label htmlFor="Autonomy_status">Autonomy Status</label>
                                    <div className="cc">
                                        <div className="c1">
                                            <input type='radio' name="a" id='auto' value="Autonomous" onChange={(e) => props.setSelectedAutonomy(e.target.value)} />
                                            <label htmlFor="auto" className='c-label'>Autonomous</label>
                                        </div>
                                        <div className="c2">
                                            <input type='radio' name="a" id='non' value="Non-Autonomous" onChange={(e) => props.setSelectedAutonomy(e.target.value)} />
                                            <label htmlFor="non" className='c-label'>Non-Autonomous</label>
                                        </div>
                                    </div>
                                    <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LeftFYC