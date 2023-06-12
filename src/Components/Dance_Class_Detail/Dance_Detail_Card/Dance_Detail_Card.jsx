//eslint-disable-next-line
import React, { useContext } from 'react';
import './Dance_Detail_Card.css'
import useIsInstructor from '../../../../Hooks/useIsInstructor';
import useAdmin from '../../../../Hooks/useAdmin';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const Dance_Detail_Card = ({ classs }) => {
    //eslint-disable-next-line
    const { name, instructor, available_seats, image, price } = classs
    const [isInstructor] = useIsInstructor();
    const [isAdmin] = useAdmin();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handle_AddToCart = (uesrs_cart) => {
        console.log(uesrs_cart);
        const cart = {Class_ID:uesrs_cart._id, email:user?.email , user_name: user?.displayName , instructor_name: uesrs_cart.instructor , class_name:uesrs_cart.name, class_image: uesrs_cart.image , class_price: uesrs_cart.price , available_seats: uesrs_cart.available_seats }

        if (user && user.email) {
            fetch("https://summer-camp-server-zeta.vercel.app/uesrs_own_cart",
            {
                method: "POST",//---------------------------------------
                headers: { //-------------------------------------------
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            }
        )
            .then(res => res.json())
            .then(uesrs_cart => {
                console.log(uesrs_cart);
                if (uesrs_cart.insertedId) {
                    // refetch()
                    Swal.fire({
                        title: 'success',
                        text: 'Your Class added successfully!',
                        icon: 'success',
                        confirmButtonText: '🥰'
                      })
                }
            })
        }else {
            Swal.fire({
                title: 'Please Login To Select This Class...',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login' , {state:{from: location}})
                }
              })
        }
    }

    return (
        <div className={`rounded-md border-2 border-pink-100 px-8 pt-8 pb-3 bg-[#f7dbdb17] ${available_seats === 0 && 'bg-red-300'} shadow-md shadow-pink-300`}>
            <img className='h-[400px] w-[400px] clip' src={image} alt="" />
            {/* <p className='absolute right-0 bottom-8 bg-teal-400 px-7 py-2 clip2'>ddhehrrut</p> */}
            <div className='text-center'>
                <p className='clip0 bg-red-400 tracking-[.3px] font-bold text-[1.3em] py-2 px-5'>{name}Dance</p>
                <p className='tracking-[5px] font-semibold'>{instructor}</p>
                <div className='pt-3'>
                    <p className=''>{available_seats} Available Seats</p>
                    <p className='text-[1.3em]'>﹩{price}</p>
                </div>
                {
                   isInstructor || isAdmin ? <button className='bg-gray-300 py-2 px-[51px] cursor-not-allowed rounded-sm text-white font-semibold text-[.97em] tracking-[1.2px]'> SELECT</button> :  
                    available_seats === 0 ? <button className='bg-gray-300 py-2 px-[51px] cursor-not-allowed rounded-sm text-white font-semibold text-[.97em] tracking-[1.2px]'>SELECT</button> : <div onClick={()=>handle_AddToCart(classs)} className='py-4 cursor-pointer'> <code className='buttons' style={{ "--clr": "#FF3131" }}> <span>SELECT</span><i></i></code></div>
                }
            </div>
        </div>
    );
};

export default Dance_Detail_Card;