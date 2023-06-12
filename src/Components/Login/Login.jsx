//eslint-disable-next-line
import React, { useContext, useEffect, useRef, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/local_Img/Log-Reg_Pic/log.png';
// import Authimg from '../../assets/others/authentication removebg.png';
// import fb from '../../local_img/facebook.png';
import gogl from '../../assets/local_Img/Log-Reg_Pic/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
// import gthb from '../../local_img/github.png';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProviders';
// import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);

    // const email_REF = useRef();
    const { User_Login, Google_Login } = useContext(AuthContext)
    const navigate = useNavigate()///////////////////////////////////////////////////////// 333

    const location = useLocation()/////////////////////////////////////////////////////// 2
    const from = location.state?.from?.pathname || '/';
    console.log(location);////////////////////////////////////// 2

    const [isScaled, setIsScaled] = useState(false);

    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };

    const Handle_Submit = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        console.log(email, password);
        set_success("")
        set_error_Message("")

        User_Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const Login_User = userCredential.user;
                console.log(Login_User);
                
                //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
                //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                const user_secret_info = { name: Login_User.displayName, email: Login_User.email }
                fetch("https://summer-camp-server-zeta.vercel.app/user_data",
                    {
                        method: "POST",//-----------------------------------
                        headers: { //---------------------------------------
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user_secret_info),
                    }
                )
                    .then(res => res.json())                                                //POST user data to database
                    .then(user_secret_info => {
                        console.log(user_secret_info);
                        if (user_secret_info.insertedId) {
                            Swal.fire({
                                title: 'success',
                                text: 'You successfully Logged in!',
                                icon: 'success',
                                confirmButtonText: '🥰K',
                            })
                            navigate(from, { replace: true });
                        }
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                        //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
                        Swal.fire({
                            title: 'success',
                            text: 'You successfully Logged in!',
                            icon: 'success',
                            confirmButtonText: '🥰K',
                        })
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                //eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                set_error_Message(errorMessage)
            });
        Full_Form.reset();
    }

    const Login_With_Google = () => {
        Google_Login()
            .then(res => {
                const loggedUser = res.user;
                // console.log(loggedUser);
                //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
                //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                const user_secret_info = { name: loggedUser.displayName, email: loggedUser.email }
                fetch("https://summer-camp-server-zeta.vercel.app/user_data",
                    {
                        method: "POST",//-----------------------------------
                        headers: { //---------------------------------------
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user_secret_info),
                    }
                )
                    .then(res => res.json())                                                //POST user data to database
                    .then(user_secret_info => {
                        console.log(user_secret_info);
                        if (user_secret_info.insertedId) {
                            Swal.fire({
                                title: 'success',
                                text: 'You successfully Logged in!',
                                icon: 'success',
                                confirmButtonText: '🥰K',
                            })
                            navigate(from, { replace: true });
                        }
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                        //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
                        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
                        Swal.fire({
                            title: 'success',
                            text: 'You successfully Logged in!',
                            icon: 'success',
                            confirmButtonText: '🥰K',
                        })
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => set_error_Message(err.message));
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
 
    return (
        <div
            className=" bg-no-repeat bg-center md:mt-[4.9em] pt-[5.7em] md:pt-0 mt-14 " style={{ backgroundImage: `url(${img})` }}
        >

            <div className='py-9 md:pt-20'>
                <section className='border-0 border-t-[1.4px] border-slate-200  w-[80%]  md:w-[70%] mx-auto  shadow-2xl'>
                    {/* <img className='w-[36%]' src={img} alt="" /> */}

                    <div className='md:w-[35%] w-[80%] mx-auto bg-transparent'>
                        <form  onSubmit={Handle_Submit}  className='' action="">
                            <p className='text-center text-[#59275d] mt-10 font-[1000] text-[.911em]   md:text-[2em] animate-charcter'>Login</p>
                            <div className=' mx-auto pt-0'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Email </p>
                                <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" defaultValue={"@gmail.com"} className=" rounded-md bg-blue-500 bg-opacity-10 border border-[#D0D0D0] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Password</p>
                               <div className='relative'><p className='pt-1 md:pt-2'><input name='password' id="password" type={passwordShown ? "text" : "password"}  placeholder='Enter your Password' className=" rounded-md bg-blue-500 bg-opacity-10 border border-[#D0D0D0] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p> <div className='absolute top-8 right-4'>{passwordShown ? <FontAwesomeIcon onClick={togglePassword} className='text-[#863e70]' icon={faEyeSlash} /> : <FontAwesomeIcon onClick={togglePassword} className='text-[#006dfd]' icon={faEye} />} </div></div>
                            </div>

                            <div className=' mx-auto pt-3 md:pb-2 pb-1'>
                                <p  onClick={handleClick}  className='pt-1 md:pt-2'><input type="submit" value="Sign In" className={`${isScaled ? 'scale-90' : ''} bg-gradient-to-r from-[#01cfff] to-[#006dfd]  duration-300  rounded-md cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em] `} /></p>
                                {/* <button onClick={Password_Forget} className=' md:text-[.85em] hover:text-blue-500 pt-1 text-[.55em] link'>Forget Password</button> */}
                                <Link to="/Register"><div className='text-center hover:text-blue-500'> <button className='text-yellow-400  md:text-[.85em] hover:text-blue-500 pt-1 text-[.55em] link'><span className='text-[#4b2750] hover:text-blue-500'>New</span> <span className='text-[#4b2750]'>h</span>ere? <span className='font-bold'>Create a New Accou<span className='text-[#4b2750]'>nt</span></span></button></div></Link>
                            </div>


                            <div>
                                <p className='text-[1.08em] text-white font-bold text-center'>Or sign in with</p>
                                <div className='my-3 flex justify-center'>
                                    <img   onClick={Login_With_Google}  className='w-[20px] md:w-[28px] cursor-pointer' src={gogl} alt="" />
                                </div>
                            </div>
                            {/* <p className='text-center font-bold text-[1.5em] text-red-500'>{error_Message}</p> */}
                            <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p>
                        </form>
                    </div>
                    <p className='text-center font-bold text-[1.5em] text-red-500'>{error_Message}</p>
                </section>
            </div>``


        </div>
    );
};

export default Login;