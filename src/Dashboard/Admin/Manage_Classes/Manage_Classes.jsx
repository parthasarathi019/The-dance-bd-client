//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEditSquare } from 'react-icons/md';
import './Manage_Classes.css'
const Manage_Classes = () => {

    const [Boookings, seBoookings] = useState([])
    const navigate = useNavigate();
    const url = (`https://summer-camp-server-zeta.vercel.app/dance_class_for_Admin`)
    useEffect(() => {
        fetch(url,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('dance-studio-access-token')}`,
                },
                // body: JSON.stringify(Logged_User_for_jwt),      
            }
        )
            .then(res => res.json())
            .then(Boooking => {
                if (!Boooking.error) {
                    seBoookings(Boooking)

                } else {
                    navigate('/')
                }
            })
    }, [url, navigate])
    console.log(Boookings);

    const handle_Conform = (_id) => {
        fetch(`https://summer-camp-server-zeta.vercel.app/dance_class/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = Boookings.filter(Boooking => Boooking._id !== _id)
                    const updated = Boookings.find(Boooking => Boooking._id === _id)
                    updated.status = 'confirm'
                    const newbookings = [updated, ...remaining]
                    seBoookings(newbookings)
                }
            })
    }

    const handle_Deny = (_id) => {
        fetch(`https://summer-camp-server-zeta.vercel.app/dance_class/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'deny' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = Boookings.filter(Boooking => Boooking._id !== _id)
                    const updated = Boookings.find(Boooking => Boooking._id === _id)
                    updated.status = 'deny'
                    const newbookings = [updated, ...remaining]
                    seBoookings(newbookings)
                }
            })
    }
    return (

        <table className='mt-[em]'>
            <caption className='bg-pink-400 clipo7'>---Manage Classes---</caption>
            <thead>
                <tr>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Picture</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Name of the Classes</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Instructor name</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Instructor email</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Available seats</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Price</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Overall Status</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Pending For Approval</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Pending  deny</th>
                    <th className='bg-teal-400 rounded-lg clipo6' scope="col">Send Feedback</th>
                </tr>
            </thead>
            <tbody>
                {
                    Boookings.map(instructor => <tr key={instructor._id}>
                        <td data-label="Class Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={instructor.image} alt="" /></td>
                        <td data-label="Class name">{instructor.name}</td>
                        <td data-label="Instructor name">{instructor.instructor}</td>
                        <td className='text-[.8em]' data-label="Instructor email">{instructor.instructor_email}</td>
                        <td data-label="Available seats">{instructor.available_seats}</td>
                        <td data-label="Price">{instructor.price}$</td>
                        <td data-label="Overall Status">
                            {
                                instructor.status === 'confirm' || instructor.status === 'deny' ? <span className='text-gray-400'>Process Complete</span> :
                                    <div className="text-red-500">Pending...</div>
                            }
                        </td>
                        <td data-label="Pending For Conformation">
                            {
                                instructor.status === 'deny' ? <span className='text-gray-400'>Approve...</span> :


                                    instructor.status === 'confirm' ? <span className='text-green-500'>Approved</span> :
                                        <div onClick={() => { handle_Conform(instructor._id) }} className="text-red-500 cursor-pointer">Approve...</div>

                            }
                        </td>
                        <td data-label="Pending For Deny">
                            {
                                instructor.status === 'confirm' ? <span className='text-gray-400'>Deny...</span> :

                                    instructor.status === 'deny' ? <span className='text-green-500'>Denied</span> :
                                        <div onClick={() => { handle_Deny(instructor._id) }} className="text-red-500 cursor-pointer">Deny...</div>

                            }

                        </td>
                        <Link to={`/Feed_Back/${instructor._id}`}><td className='flex justify-center items-center pt-6 cursor-pointer ' data-label="Send Feedback" ><p><MdEditSquare className='bg-blue-400 text-[1.4em]'></MdEditSquare></p></td></Link>
                        {/* <Link to = {`/Chackout/${Survice._id}`}><button className="btn btn-primary">Book Now</button></Link> */}

                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Manage_Classes;

//



