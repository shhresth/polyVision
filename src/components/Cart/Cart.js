import React from 'react'
import './Cart.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function Cart(props) {
    const remove = (index) => {
        let newCart = props.cart
        newCart.splice(index,1)
        props.setCart([...newCart])
   }
    const Component = useRef();
    const print = useReactToPrint({
        content : () => Component.current,
    });

  return (
    <div className='c-cart' ref={Component}>
        <h1 style={{textAlign:"center"}}>Your Cart</h1>
        <br/>
        {
            props.cart.length != 0 ? (
        
        <Table className='table table-light table-hover m-0'>
            <Thead>
                <Tr>
                <td><h4>College Image</h4></td>
                <td><h4>College Name</h4></td>
                <td><h4>College Address</h4></td>
                <td><h4>All Courses</h4></td>
                <td><h4>Status  </h4></td>
                <td><h4>Remove</h4></td>
                </Tr>
            </Thead>
            <Tbody>
                {
                    props.cart.map((item,index)=>{
                        return(
                            <Tr key={index}>
                            <Td>
                                <img className='cartIMG' src={item.LogoURL}></img>
                            </Td>
                            <Td>{item.Name}</Td>
                            <Td>{item.Location.Address}</Td>
                            <Td>{item.AllDept.map((i)=>{
                                return <ul>{i}</ul>
                            })}</Td>
                            <Td>{item.College_Status}</Td>
                            <Td><button className='rButton'onClick={() =>remove(index)}>Remove</button></Td>
                            </Tr>
                        )
                    })
                    
                }
            </Tbody>
            <br/>
            <br/>
            <br/>
                <button className='eButton'type="button" onClick={print}>Export</button>
        </Table>
        
        
            )  : <h3>No Colleges Are Added</h3>
    }
    
    </div>
  )
}

export default Cart