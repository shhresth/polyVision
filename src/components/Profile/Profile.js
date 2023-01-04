
import React, { useEffect, useState, useRef } from 'react'
import { redirect, useLocation, useParams } from "react-router-dom";
import './Profile.css'
import {Link} from 'react-router-dom';
import { list } from 'postcss';
import { Helmet } from 'react-helmet-async';

function Profile() {
  // let currentclg = null

  let currentclg = localStorage.getItem("currentclg");
    currentclg = JSON.parse(currentclg)
    const Data = currentclg
  
// remove()

const nameFormating = (name) =>{

}
const rating = (num) =>{
if(num<1){
  return (<div><i class="fa fa-star-half-full"></i> {num}</div>)
}
if(num === 1){
  return (<div><i class="fa fa-star"></i> {num}</div>)
}
if(num === 2){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
if(num === 3){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
if(num === 4){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i></i> {num}</div>)
}
if(num === 5){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></i> {num}</div>)
}
if(num>=1 && num<=1.4){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i> {num}</div>)
}

if(num>=1.5 && num<=2){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
if(num>=2.1 && num<=2.5){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i> {num}</div>)
}
if(num>=2.6 && num<=3){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
if(num>=3.1 && num<=3.5){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i> {num}</div>)
}
if(num>=3.6 && num<=4){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
if(num>=4.1 && num<=4.5){
  return (<div><i class="fa fa-star"><i class="fa fa-star"></i></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-full"></i> {num}</div>)
}
if(num>=4.6 && num<=5){
  return (<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> {num}</div>)
}
else{
  return
}
}
//  const List = null
// console.log(loc.state.prop);

const List = Object.entries((currentclg.Dept))
let counter = 0
let Website1 =""
Website1 = Website1.concat("https://",Data.Website)
 
    return (
    
      <div>

<Helmet>
  <title>Profile Page</title>
  <meta name="description" content='This web page Contains All the Available Information Of The User Selected College'></meta>
  <link rel="canonical" href="/Profile" />
</Helmet>

    <div className="container" id='container'>
      <div className="clgimg">
      <img src={Data.LogoURL} id="clgimg" alt='Campus'/>
      </div>
      <div className="clgdetails">
          <div className="topInfo">
          <h2 id='clgname' style={{paddingTop:"5px"}}>{Data.Name}</h2><br/>
      
      <div className="otherinfo">
          <span>{Data.Location.District},{Data.Location.Region}</span> &nbsp; &nbsp;<br/>


          {/* <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span> */}
          {rating(Data.Rating)}
          </div>
      </div>
      <div className="main">
      <p  id="listtext" >List Of Available Engineering Courses:</p>
      
         
                  {
                    
                                        List!=null &&  List.length != 0?(
                                           List.map((item) => {
                                          
                                                return (
                                                    <div>
                                                        
                                                    
                                                       <div className="table-responsive-vertical shadow-z-1">
                                                    {/* <!-- Table starts here --> */}
                                                    <table id="table" className="table table-hover table-mc-light-blue">
                                                        <thead>
                                                          <tr>
                                                            <th>Course Name</th>
                                                            <th>No of seats</th>
                                                            <th>Fees</th>
                                                            <th>Cutoff</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                         <tr style={{color:"white", border:"black"}}>
                                                              <td data-title="Course Name">{Object.values(List[counter])[0]||"NA"} </td>
                                                              <td data-title="No of seats">{List[counter][1].NoOfSeats}</td>
                                                              <td data-title="Fees">{List[counter][1].Approx_fees||"NA"}</td>
                                                              <td data-title="Cutoff">
                                                                <div className='cutoffData'>OPEN:{List[counter][1].Caste.OPEN||"NA"} <br/>
                                                                  EWS:{List[counter][1].Caste.EWS||"NA"}<br/>
                                                                  Minority:{List[counter][1].Caste.Minority||"NA"}<br/>
                                                                  NT:{List[counter][1].Caste.NT||"NA"}<br/>
                                                                  OBC:{List[counter][1].Caste.OBC||"NA"}<br/>
                                                                  OPEN:{List[counter][1].Caste.OPEN||"NA"}<br/>
                                                                  PH:{List[counter][1].Caste.PH||"NA"}<br/>
                                                                  SC:{List[counter][1].Caste.SC ||"NA"}<br/>
                                                                  ST:{List[counter][1].Caste.ST||"NA"}<br/>
                                                                  VJ:{List[counter][1].Caste.VJ ||"NA"}<br/>
                                                                  TFWS:{List[counter][1].Caste.TFWS ||"NA"}<br/></div>
                                                                  
                                                               <div className="stupidCounter">
                                                                  {counter= counter+1}
                                                                  </div>
                                                              </td>
                                                            
                                                            </tr>
                                                           
                                                           </tbody>
                                                              </table>
                                                             
                                                              
                                                         </div>
                                                        
                                                    </div>
                                                  
                                                )
                                               
                                            })
                                          
                                        ) : <div><h4 style={{color:"white","padding-left":"16px"}}>No Data Available of Cutoff</h4><br/></div>
                                    }
                   
                  
                
      </div>
      <div className="AdditionalInfo">
          <h3>Additional Information:</h3>
          <p id="address">Address: <br/>{Data.Location.Address}</p>
          Hostel Availability : {Data.HostelAvailability}<br/>
          College Status: {Data.College_Status}<br/>
          Autonomy Status: {Data.Autonomy_status}<br/>
          Website: <a href={Website1} target="_blank" className="btn"><button class="arrow-button">Visit Website!<span class="arrow"></span></button></a> <br/>
          Cutoff Details: &nbsp; 
          <a href={Data.Pdflink} target="_blank" id="btn"><button class="arrow-button">Get Details<span class="arrow"></span></button></a>

          {/* <a href={Data.Pdflink} target="_blank" className="btn" id="btn">Get Deatails</a> */}

        </div>
        
  </div>

    </div>
    <br></br>
  <br></br>
  <br></br>
  <br></br>
    </div>

    
    );
}

export default Profile;
