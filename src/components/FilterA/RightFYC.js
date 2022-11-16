import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Card from '../Card/Card'
import MoonLoader from "react-spinners/MoonLoader";


function RightFYC(props) {
    const a = () => {
    }
    useEffect((i) => {
        a()
    }, [props.ecart])

    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem('data'))
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)
    }, [])

  

    return (
        <>
            <div className="f-right">
                <div className="f-title">
                    <h5>Results : {props.searchItem.length} colleges found</h5>
                    <h5>{props.NO}</h5>
                    <button className='f-filter-button' onClick={props.showMe}>{<FaFilter />}Filter</button>
                </div>
                <div className="f-border"></div>
                <div className="f-cards">
                    {
                        Loading ? 
                        <div className="lod">
                            <MoonLoader
                                size={40}
                                color="rgb(140, 71, 204)"
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                            :
                            <div className="container">
                                <div className="row">
                                    {
                                        props.searchItem.length != 0 ? (
                                            props.searchItem.map((item, key) => {
                                                return (
                                                    <div className="col-md-6 h-col" key={key}>
                                                        <Card item={item} setCart={props.esetCart} cart={props.ecart} 
                                                        selectedCaste={props.selectedCaste}
                                                        selectedFees={props.selectedFees}
                                                        selectedCourse={props.selectedCourse}
                                                        selectedMarks={props.selectedMarks}/>
                                                    </div>
                                                )
                                            })
                                        ) : <h4>Please Wait</h4>
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default RightFYC