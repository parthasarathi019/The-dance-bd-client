// import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Bars3Icon } from "@heroicons/react/24/outline";
import Dashboard_Active_Link from '../assets/Dashboard_Active_Link/Dashboard_Active_Link';
import useIsInstructor from '../../Hooks/useIsInstructor';
// import home from '../local_img/Admin_Dashboard_Icon/home.png';
// import cutlery from '../local_img/Admin_Dashboard_Icon/cutlery.png';
// import list from '../local_img/Admin_Dashboard_Icon/list.png';
// import book from '../local_img/Admin_Dashboard_Icon/book.png';
// import customer from '../local_img/Admin_Dashboard_Icon/customer.png';
// import menu from '../local_img/Admin_Dashboard_Icon/menu.png';
// import bag from '../local_img/Admin_Dashboard_Icon/bag.png';
// import email from '../local_img/Admin_Dashboard_Icon/email.png';
// import Dashboard_Active_Link from '../assets/Dashboard_Active_Link/Dashboard_Active_Link';
import useAdmin from '../../Hooks/useAdmin';
import { SiGoogleclassroom } from 'react-icons/si';
import { ImUsers , ImAddressBook } from 'react-icons/im';
import { FaHome , FaHistory} from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import { BiSelectMultiple } from 'react-icons/bi';
import { MdOutlineClass } from 'react-icons/md';
import { FaCcAmazonPay } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [isInstructor] = useIsInstructor();
    const [isAdmin] = useAdmin();
    console.log(isInstructor);

    let content;

    if (isAdmin) {
        content = <section>
            <Dashboard_Active_Link to='/Dashboard/Home'> <div className='flex font-bold gap-x-2 items-center pb-4'><SiGoogleclassroom></SiGoogleclassroom><p>Manage Classes</p></div></Dashboard_Active_Link>
            <Dashboard_Active_Link to='/Dashboard/Manage_Users'> <div className='flex font-bold gap-x-2 items-center pb-3'><ImUsers></ImUsers><p>Manage Users</p></div></Dashboard_Active_Link>
        </section>;
    } else if (isInstructor) {
        content = <section>
            <Dashboard_Active_Link to='/Dashboard/Home'> <div className='flex font-bold gap-x-2 items-center'><MdLibraryAdd></MdLibraryAdd><p>Add a Class</p></div></Dashboard_Active_Link>
            <Dashboard_Active_Link to='/Dashboard/My_Classes'><div className='flex font-bold pt-2 pb-4 gap-x-2 items-center'><ImAddressBook></ImAddressBook><p>My Classes</p></div></Dashboard_Active_Link>
        </section>;
    } else {
        content = <section>
            <Dashboard_Active_Link to='/Dashboard/My_Selected_Classes'> <div className='flex font-bold gap-x-2 items-center'><BiSelectMultiple></BiSelectMultiple><p>My Selected Classes</p></div></Dashboard_Active_Link>
            <Dashboard_Active_Link to='/Dashboard/My_Enrolled_Classes'> <div className='flex font-bold gap-x-2 items-center py-2'><MdOutlineClass></MdOutlineClass><p>My Enrolled Classes</p></div></Dashboard_Active_Link>
            <Dashboard_Active_Link to='/Dashboard/Peyment'> <div className='flex font-bold gap-x-2 items-center pb-2'><FaCcAmazonPay></FaCcAmazonPay><p>Payment</p></div></Dashboard_Active_Link>
            <Dashboard_Active_Link to='/Dashboard/Payment_History'> <div className='flex font-bold gap-x-2 items-center pb-4'><FaHistory></FaHistory><p>Payment History</p></div></Dashboard_Active_Link>
        </section>;
    }

    return (
        <section className='flex'>
            <nav
                //eslint-disable-next-line
                x-data="{ isOpen: false }"
                className="text-black md:w-[22%] md:bg-gradient-to-r from-cyan-500 to-blue-500 top-0 "
            >
                <div className="container mx-auto">
                    <div className="flex flex-col  justify-center">
                        <div className="flex flex-col-reverse">

                            <div className='text-white hidden'>
                                {/* <img className="md:w-[6.6875em] w-[3.9375em] "src={logo} alt=""/> */}
                                <p className='text-[1.2em] font-bold'>𝐃𝐚𝐧𝐜𝐞 𝐒𝐭𝐮𝐝𝐢𝐨 𝐁𝐚𝐧𝐠𝐥𝐚</p>
                                <p className='text-[.8em] italic'>𝐷𝐴𝑁𝐶𝐸 𝑆𝐶𝐻𝑂𝑂𝐿</p>
                            </div>

                            <div className="flex lg:hidden mt-[10px]">
                                <button
                                    onClick={() => {
                                        //eslint-disable-next-line
                                        setOpen(!open);
                                    }}
                                    type="button"
                                    className={`text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 `}
                                    aria-label="toggle menu"
                                >
                                    <Bars3Icon className="h-6 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className={`${open ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"} absolute inset-x-0 z-20 w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-in-out md:bg-transparent top-[44px]  md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0`}>
                            <div className='pl-8 py-7 h-screen'>
                                <div className='pb-11'>
                                    <p className='text-[1.7em] font-bold'>𝐃𝐚𝐧𝐜𝐞 𝐒𝐭𝐮𝐝𝐢𝐨 𝐁𝐚𝐧𝐠𝐥𝐚</p>
                                   <p className='tracking-[12px] font-semibold'>𝐷𝐴𝑁𝐶𝐸 𝑆𝐶𝐻𝑂𝑂𝐿</p>
                                </div>
                                <div>
                                    {content}
                                    <hr className='w-[81%] border' />
                                    <Dashboard_Active_Link to='/' ><div className='flex font-bold pt-8 gap-x-2 items-center'><FaHome></FaHome><p>HOME</p></div></Dashboard_Active_Link>
                                    <Dashboard_Active_Link to='/Instructors' ><div className='flex font-bold pt-7 gap-x-2 items-center'><GiTeacher></GiTeacher><p>INSTRUCTORS</p></div></Dashboard_Active_Link>
                                    <Dashboard_Active_Link to='/Dance_Class' ><div className='flex font-bold pt-7 gap-x-2 items-center'><FaBook></FaBook><p>CLASSES</p></div></Dashboard_Active_Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='md:w-[76%] w-[100%]'>
                <Outlet></Outlet>
            </section>
        </section>
    );
};

export default Dashboard;

