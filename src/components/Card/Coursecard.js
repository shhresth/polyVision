import React from 'react'
import '../Card/Coursecard.css'

function Coursecard() {
return(
<div>

<div class="card2">
            <div class="card_header2">
               <div class="content2">
                <h1 className="ch1">Course Name</h1>
                <p className='cp2'>
                    thoda info related to course
                </p>
               </div>
               <div class="content-image2">
                <span class="fa fa-html52"></span>
            </div>
            </div>
            <div class="card_info2">
                <p className='cp2'><span class="fa fa-users2"></span>Author ka naam</p>
                <p className='cp2'>Duration : 6h 9m</p>
            </div>
            <div class="card_footer2">
                    <button class="cbtn2"><a href='' target={'_blank'} rel="noreferrer noopener" onClick={()=> window.open("", "_blank")}>Show!</a><span class="fa fa-long-arrow-right2"></span></button>
            </div>
        </div>


</div>
)
}
export default Coursecard
