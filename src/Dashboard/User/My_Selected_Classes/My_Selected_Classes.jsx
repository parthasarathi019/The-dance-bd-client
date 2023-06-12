//eslint-disable-next-line
import React from 'react';
// import { FaTrashAlt } from "react-icons/fa";
// import { useState } from 'react';
import Swal from 'sweetalert2';
import useCart from '../../../../Hooks/useCart';
import { Link } from 'react-router-dom';
import './My_Selected_Classes.css'
const My_Selected_Classes = () => {
    const [uesrs_own_cart, refetch] = useCart()
    console.log(uesrs_own_cart);
    const total = uesrs_own_cart.reduce((sum, item) => item.class_price + sum, 0)
    console.log(uesrs_own_cart);
    const handle_delete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:7000/uesrs_own_cart/${_id}`, { method: "DELETE" },

                )
                    .then(res => res.json())
                    .then(delete_data => {
                        // console.log(delete_data);
                        if (delete_data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

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
                        <th className='bg-red-400  clipo2' scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        uesrs_own_cart.map(cart => <tr key={cart._id}>
                            <td className='flex justify-center py-1' data-label="Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={cart.class_image} alt="" /></td>
                            <td data-label="Class Name">{cart.class_name}</td>
                            <td data-label="Class Price">{cart.class_price}</td>
                            <td data-label="PAY"><Link  to={`/Payment/${cart._id}`}><button className= 'clip11 bg-green-500 px-3 py-2 rounded-lg text-white' >PAY</button></Link></td>
                            <td data-label="Delete"><button onClick={() => { handle_delete(cart._id) }} className='clip11 bg-red-500 px-3 py-2 rounded-lg text-white' >Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default My_Selected_Classes;

