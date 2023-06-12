//eslint-disable-next-line
import React from 'react';
// import useCart from '../../../Hooks/useCart';
import { FaUserAstronaut , FaUserSecret , FaUsersCog , FaUserGraduate} from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { useState } from 'react';
// import user_icon from '../../../local_img/users.png';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import img from '../../../assets/local_Img/Admin_Manage_User/class.png';
import './Manage_Users.css'

// import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
const Manage_Users = () => {
    const [axiosSecure] = useAxiosSecure();
    const [isScaled0, setIsScaled0] = useState(false);
    // const [isScaled, setIsScaled] = useState(false);
    //eslint-disable-next-line
    // const handleClick = () => {
    //     setIsScaled(true);
    //     setTimeout(() => {
    //         setIsScaled(false);
    //     }, 300); // Change the duration as needed
    // };
    const handleClick0 = () => {
        setIsScaled0(true);
        setTimeout(() => {
            setIsScaled0(false);
        }, 300); // Change the duration as needed
    };

    const { data: User_Info_Data = [], refetch } = useQuery(['User_Info_Data'], async () => {
        const res = await axiosSecure.get('/user_data')
        return res.data;
    })

    const Make_Admin = (user) => {
        fetch(`https://summer-camp-server-zeta.vercel.app/user_data/admin/${user._id}`, {
            method: "PATCH",
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const Make_Instructor = (user) => {
        fetch(`https://summer-camp-server-zeta.vercel.app/user_data/instructor/${user._id}`, {
            method: "PATCH",
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    return (

           <table 
        className="bg-cover color bg-center bg-no-repeat mt-[0em] md:max-w-[1280px] mx-auto relative z-0"
        style={{
            // backgroundColor: 'rgba(0,0,0,.5)',
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${img})`,
            backgroundSize: 'cover',
            backgroundAttachment: "fixed",

            //   opacity: 0.55,
        }}
        >
            <caption>---Manage Users---</caption>
            <thead>
                <tr>
                    <th className='bg-red-400  clipo2' scope="col">Name </th>
                    <th className='bg-red-400  clipo2' scope="col">Email</th>
                    <th className='bg-red-400  clipo2' scope="col">Make Admin</th>
                    <th className='bg-red-400  clipo2' scope="col">Make Instructor</th>
                </tr>
            </thead>
            <tbody>
                {
                    User_Info_Data.map(user => <tr key={user._id}>
                        <td data-label="Name">{user.name}</td>
                        <td data-label="Email">{user.email}</td>
                        <td className='py-3' data-label="Make Admin">{
                            user.role === 'admin' ? <p className={`bg-red-200 clipo9 cursor-not-allowed py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed'><FaUsersCog></FaUsersCog></button></p>: <p onClick={() => Make_Admin(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 clipo9 bg-lime-500 cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaUserAstronaut></FaUserAstronaut></button></p></p>
                        }</td>
                        <td className='py-3' data-label="Make Instructor">{
                            user.role === 'instructor' ? <p className={`bg-red-200 clipo9 cursor-not-allowed py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed'><FaUserGraduate></FaUserGraduate></button></p>: <p onClick={() => Make_Instructor(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-lime-500 clipo9 cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><RiUserVoiceFill></RiUserVoiceFill></button></p></p>
                        }</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Manage_Users;
