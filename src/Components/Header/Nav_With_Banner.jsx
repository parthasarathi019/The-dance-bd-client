//eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Active_Route from '../Active_Route/Active_Route'
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Active_Route from '../Active_Route/Active_Route';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProviders';
import { FiUserX } from 'react-icons/fi';

// import "./Nav_With_Banner.css"
// import { AuthContext } from '../../Providers/AuthProviders';
// import cart from '../../assets/icon/cart.png';
// import useCart from '../../../Hooks/useCart';

const Nav_With_Banner = () => {
    const [open, setOpen] = useState(false);
    const { user, Log_Out } = useContext(AuthContext)
    // const [uesrs_own_cart]= useCart() //-=-=-Tanstack-=-=-=-=-Quary-=-=-
    const handle_logout = () => {

        Log_Out() // ʙᴇʜɪɴᴅ ᴛʜᴇ sᴇᴇɴ Log_Out = signOut(auth) ... .. . so,
            .then(() => { })
console.log(666)
            .catch((error) => { console.log(error) });
    }
// const user = false
    return (
        <>
            <nav>

                <nav
                    //eslint-disable-next-line
                    x-data="{ isOpen: false }"
                    className="text-black md:rounded-b-full fixed z-10 max-w-[1280px] left-[62px] mx-auto w-full bg-black bg-opacity-30 top-0 md:py-3 py-2"
                >
                    <div className="container px-6 py-1 mx-auto">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className='text-white'>
                                        {/* <img className="md:w-[6.6875em] w-[3.9375em] "src={logo} alt=""/> */}
                                        <p className='text-[1.2em] font-bold'>𝐃𝐚𝐧𝐜𝐞 𝐒𝐭𝐮𝐝𝐢𝐨 𝐁𝐚𝐧𝐠𝐥𝐚</p>
                                        <p className='text-[.8em] italic tracking-[8px]'>𝐷𝐴𝑁𝐶𝐸 𝑆𝐶𝐻𝑂𝑂𝐿</p>
                                    </div>

                                    <div className="hidden mx-10 md:block">
                                    </div>
                                </div>

                                <div className="flex lg:hidden">
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

                            <div
                                className={`   ${open
                                    ? "translate-x-0 opacity-100 "
                                    : "opacity-0 -translate-x-full"
                                    } absolute inset-x-0 z-20 w-full px-6 py-2 bg-black bg-opacity-50 transition-all duration-300 ease-in-out md:bg-transparent top-[72px]  md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                            >
                                <div className="flex flex-col font-bold  items-center md:flex-row md:mx-1 text-white">
                                    <Active_Route to="/">
                                        <a
                                            className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform  hover:underline md:mx-4 md:my-0`}
                                        >
                                            HOME
                                        </a>
                                    </Active_Route>

                                    <Active_Route to="/Instructors">
                                        <a
                                            className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform  hover:underline md:mx-4 md:my-0`}
                                        >
                                            INSTRUCTORS
                                        </a>
                                    </Active_Route>
                                    <Active_Route to="/Dance_Class">
                                        <a
                                            className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                        >
                                            CLASSES
                                        </a>
                                    </Active_Route>
                                    {
                                        user && <Active_Route to="/Dashboard/Home">
                                            <a
                                                className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                            >
                                                DASHBOARD
                                            </a>
                                        </Active_Route>
                                    }
                                    {/* {
                                        user &&
                                        <a className={`cursor-pointer my-2 text-[1.2em] md:mx-4 md:my-0 relative`}>
                                            <p className='absolute font-bold text-white px-2 bottom-0 right-0 bg-red-500 rounded-full'>{uesrs_own_cart?.length || 0}</p>
                                            <img className='w-14 ' src={cart} alt="" />
                                        </a>
                                    } */}
                                    <section className='flex items-center'>

                                        {
                                            user ? <div onClick={handle_logout}>
                                                <a
                                                    className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform  hover:underline md:mx-4 md:my-0`}
                                                >
                                                    Sign Out
                                                </a>
                                            </div> :
                                                <Active_Route to="/Login">
                                                    <a
                                                        className={`cursor-pointer my-2 text-[1.2em] leading-5 transition-colors duration-300 transform   hover:underline md:mx-4 md:my-0`}
                                                    >
                                                        Login
                                                    </a>
                                                </Active_Route>
                                        }

                                        {
                                            user ? <img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} /> : <FiUserX></FiUserX>

                                        }
                                    </section>
                                </div>
                                <div className="my-4 md:hidden">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-6 text-gray-500" />
                                        </span>

                                        <input
                                            type="text"
                                            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Nav_With_Banner;
