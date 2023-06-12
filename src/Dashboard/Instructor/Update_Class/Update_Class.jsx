//eslint-disable-next-line
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

import 'aos/dist/aos.css'; // You can also use <link> for styles
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';


const Update_Class = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)

const navigate = useNavigate();
const Loaded_Class = useLoaderData()
console.log(Loaded_Class._id);
const Handle_Update = (event) => {
    event.preventDefault();
    const Full_Form = event.target
    const name = Full_Form.class_name.value
    const image = Full_Form.class_image.value
    const price = Full_Form.price.value
    const available_seats = Full_Form.available_seats.value


    const Update_Class = {name , image , price , available_seats}
    console.log(Update_Class);

    axiosSecure.put(`/update_class/${Loaded_Class._id}`, Update_Class)
    .then(data => {
        console.log('after posting new menu item', data.data);
        if (data.data.modifiedCount) {

            Swal.fire({
                title: 'success',
                text: 'Your Information Updated successfully!',
                icon: 'success',
                confirmButtonText: '🥰K',
              })
              
              navigate("/Dashboard/My_Classes")
          }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please update at least 1 property!',
              })
          }    
    })

}
    return (
        <div data-aos="zoom-in" className='bg-white'> 
            <div className=''>
                <p className='text-[#c16a3b] text-2xl text-center '>--Update A Class--</p>

                <div className='w-[73%] mx-auto my-6 text-orange-600 border border-black'>
                    <form onSubmit={Handle_Update} className='bg-[#f3f3f3]' action="">
                        <p className='text-2xl text-center text-[#374151] font-bold'> __Update Your Class__</p>
                        <p className='md:text-[.9em] text-[.73em] text-center text-[#374151]'>Click here to Add class details.  Here you can Add all the details.  Thanks for visiting the Add page.</p>
                        <section className='flex'>
                            <div className='w-full'>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Instructor name</p>
                                    <p className='pt-1 md:pt-2'><input  defaultValue={user?.displayName} readOnly name='instructor_name' id="instructor_name" type='text' required="required" placeholder='Enter Instructor Name' className=" bg-white cursor-not-allowed w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Class Name</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_Class.name} name='class_name' id="class_name" type='text' required="required" placeholder='Enter Class Name' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold '>Price</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_Class.price} name='price' id="price" type='number' required="required" placeholder='Enter your Asking Price' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                               
                            </div>
                            <div className='w-full'>
                            <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Instructor email</p>
                                    <p className='pt-1 md:pt-2'><input readOnly defaultValue={user?.email} name='instructor_email' id="instructor_email" type='text' required="required" placeholder='Enter Instructor Email' className=" bg-white w-full cursor-not-allowed py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>

                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Class Image</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_Class.image} name='class_image' id="class_image" type='text' required="required" placeholder='Enter Class Photo URL' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                                <div className='w-[80%] mx-auto pt-3'>
                                    <p className='md:text-[.94em] text-[.85em] font-semibold'>Available seats</p>
                                    <p className='pt-1 md:pt-2'><input defaultValue={Loaded_Class.available_seats} name='available_seats' id="available_seats" type='number' required="required" placeholder='Enter Available Seats' className=" bg-white w-full py-2 md:py-3 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                                </div>
                            </div>
                        </section>

                        <div className='w-[90.4%] mx-auto pt-3 pb-2'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Update This Class" className=" text-black bg-[#D2B48C] border-2 border-black rounded-md cursor-grab w-full py-2 md:py-[5.52px] pl-1 md:pl-2 text-[.65em] md:text-[1.3em]" /></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update_Class;
//
