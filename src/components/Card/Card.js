import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './Card.css'
import { Link, Route} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component' ;
import 'react-lazy-load-image-component/src/effects/blur.css' ;

import {RiHeartAddFill} from 'react-icons/ri'
// import React, { useEffect } from "react";
import Profile from '../Profile/Profile';
function Card(props) {
    const ref = useRef(null);
    const cards = document.querySelectorAll('.card');
    const transition = event => {
        if (event.currentTarget.classList.contains('active1')) {
            event.currentTarget.classList.remove('active1')
        } else {
            event.currentTarget.classList.add('active1');
        }
        
    }
        const storelocal=(dataobj)=>{
            localStorage.setItem('currentclg',JSON.stringify(props.item))
            console.log(props.item);
        }
     
        const onCLick = () => {
            props.setCart([...props.cart, props.item]);
        }
    return (
        <>
            {/* <div class="cardContainer"> */}
                <div className="card" ref={ref} onClick={transition}>
                    <div class="side front" id='frontSide'>
                        <div class="img">
                            {/* <img className='img1' src={props.item.LogoURL}></img> */}
                            <LazyLoadImage src={props.item.LogoURL} className='img1' alt='Photo of the Campus'></LazyLoadImage>
                        </div>
                        <div class="info">
                            <h5>{props.item.Name}</h5>
                            {/* <p>{props.item.College_Status}</p> */}
                            <p>{props.item.Location.Address}</p>

                
                        </div>
                    </div>
                    <div class="side back" id='backside'>
                        <div className="backside">
                        <div class="info">
                        <div className="ccc" style={{ display: "flex", alignItems: "center" }}>
                                <h4 className='ch2'>Info</h4>
                                <div className="cb" style={{ width: "100%", textAlign: "right" }} >
                                    <button className='cartButton' onClick={onCLick}><RiHeartAddFill></RiHeartAddFill></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6">
                        <ul>
                            <li>Region : {props.item.Location.Region}</li>
                            <li> District : {props.item.Location.District}</li>
                            <li>
                            {
                                            props.selectedCourse != 0 && props.selectedFees != 0 && props.item.maxFees != props.item.minFees ? <p>Fees Range : </p> : "Fees Range :"
                                        } {props.item.maxFees} - {props.item.minFees}</li>
                                        {/* <li>{props.item._id}</li> */}
                                    <li><b>Selected Castes :</b>{
                                            props.selectedCaste != "" ? props.selectedCaste : "NA"
                                        }
                                    </li>
                                    <li><b>Selected Course :</b>{
                                            props.selectedCourse != "" ? props.selectedCourse : "NA"
                                        }
                                    </li>
                                    <li><b>Selected Fees :</b>{
                                            props.selectedFees != "" ? props.selectedFees : "NA"
                                        }
                                    </li>
                            </ul>
                            </div>
                            <div className="col-6 side_border" id='nopadding'>
                            <ul>
                            
                            <li>Autonomy Status : {props.item.Autonomy_status}</li>
                            <li>Hotel Availability : {props.item.HostelAvailability}</li>
                            <li>College Status : {props.item.College_Status}</li>
                        </ul>
                        </div>
                       
                        
                        <div class="btn">
                    <Link to="/Profile"
                        state={{prop:props.item}} onClick={storelocal} target="_blank"
                    >Learn More!</Link>
                    
                        {/* Learn More! */}
                            {/* </a> */}
                            <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /><path d="M0-.25h24v24H0z" fill="none" /></svg>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
            
        </>
    )
}

export default Card