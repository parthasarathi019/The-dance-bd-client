//eslint-disable-next-line
import React from 'react';
// import { FaTrashAlt } from "react-icons/fa";
// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import useCart from '../../../../Hooks/useCart';
import { Link } from 'react-router-dom';
import useCart from '../../../../Hooks/useCart';
const Peyment = () => {
    const [uesrs_own_cart] = useCart()
    console.log(uesrs_own_cart);
    const total = uesrs_own_cart.reduce((sum, item) => item.class_price + sum, 0)
    console.log(uesrs_own_cart);
  

    return (

        <div>
          <div className='flex justify-evenly pt-3'>
          <p className='font-bold text-[1.2em] uppercase'>Total orders: <span>{uesrs_own_cart.length}</span></p>
            <p className='font-bold text-[1.2em] uppercase'>total price: $<span>{total}</span></p>
          </div>
            <table className='mt-[.4em] md:max-w-[1280px] mx-auto'>

                <caption>---My Selected Class ---</caption>

                <thead>
                    <tr>
                        <th className='bg-red-400  clipo2' scope="col">Image</th>
                        <th className='bg-red-400  clipo2' scope="col">Class Name</th>
                        <th className='bg-red-400  clipo2' scope="col">Class Price</th>
                        <th className='bg-red-400  clipo2' scope="col">Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        uesrs_own_cart.map(cart => <tr key={cart._id}>
                            <td className='flex justify-center py-1' data-label="Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={cart.class_image} alt="" /></td>
                            <td data-label="Class Name">{cart.class_name}</td>
                            <td data-label="Class Price">{cart.class_price}</td>
                            <td data-label="PAY"><Link  to={`/Payment/${cart._id}`}><button className='bg-green-500 clip11 px-3 py-2 rounded-lg text-white' >PAY</button></Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Peyment;


