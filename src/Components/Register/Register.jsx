//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/local_Img/Log-Reg_Pic/reg.png';
// import Authimg from '../../assets/others/authentication removebg.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gogl from '../../assets/local_Img/Log-Reg_Pic/google.png';
import  './Register.css';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    //npm i react-simple-captcha

    const [isScaled, setIsScaled] = useState(false);
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    // const { Google_Login } = useContext(AuthContext)
    const { Create_User} = useContext(AuthContext)
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown0, setPasswordShown0] = useState(false);

const navigate = useNavigate()
    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };

    const location = useLocation()/////////////////////////////////////////////////////// 2
    const from = location.state?.from?.pathname || '/';
    console.log(location);////////////////////////////////////// 2

    const Handle_Submit = (event) => {
        event.preventDefault();
        set_success("")
        const Full_Form = event.target
        const name = Full_Form.name.value
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        const conf = Full_Form.conf.value
     
   
        set_error_Message("")

        //VALIDATION
        if (!/(?=.*[A-Z])/.test(password)) {
            set_error_Message("Please at least set one uppercase later of your password")
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            set_error_Message("Please at least set one numerical number of your password")
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            set_error_Message("Please at least set one special case letter [?,=,*,!,@,#,$,&,] of your password")
            return;
        } else if (!/.{6}/.test(password)) {
            set_error_Message("Please Ensure the length of your password is more than 6.")
            return;
        }

        if (password !==conf) {
            set_error_Message("Your Password & Conform Password Is Not Match.Please Enter Correct Password In Those Field")
            return;
        }
                  //image upload start-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        const image = Full_Form.image.files[0]
        const Form_Data = new FormData()
        Form_Data.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
        fetch(url, {
            method: 'POST',
            body: Form_Data,
        })
            .then(res => res.json())
            .then(img_data => {
                //    console.log(img_data.data.display_url)
                const img_url = img_data.data.display_url
                //image upload end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

                   Create_User(email, password)
                   .then((userCredential) => {
                       // Signed In
                       const user = userCredential.user;
                       console.log(user);
                       set_error_Message("")
                       // event.target.reset()
                       set_success("User has been created successfully")
                       updateProfile(user, {
                           displayName: name,
                           photoURL: img_url
                         })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                       .then(() => {
                           const user_secret_info = {name , email , password , img_url}
                            fetch("http://localhost:7000/user_data",
                            {
                                method: "POST",//-----------------------------------
                                headers: { //---------------------------------------
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(user_secret_info),
                            }
                        )
                            .then(res => res.json())
                            .then(user_secret_info => {
                                console.log(user_secret_info);
                                if (user_secret_info.insertedId) {
                                    Swal.fire({
                                        title: 'success',
                                        text: 'User has been created successfully!',
                                        icon: 'success',
                                        confirmButtonText: '🥰K',
                                      })
                                      navigate('/')
                                }
                            })
                        })
       
                    })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                          
                   
                   .catch((error) => {
                       //eslint-disable-next-line
                       const errorCode = error.code;
                       const errorMessage = error.message;
                       set_error_Message(errorMessage)
                       // ..
                   });
               })
               .catch(err => console.log(err.message))
           //Friebase code end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(name , email , password);
        Full_Form.reset();
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    const togglePassword0 = () => {
        setPasswordShown0(!passwordShown0);
      };

    // const Login_With_Google = () => {
    //     Google_Login()
    //         .then(res => {
    //             const loggedUser = res.user;
    //             // console.log(loggedUser);
    //             //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //             //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
    //             //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //             const user_secret_info = { name: loggedUser.displayName, email: loggedUser.email }
    //             fetch("http://localhost:7000/user_data",
    //                 {
    //                     method: "POST",//-----------------------------------
    //                     headers: { //---------------------------------------
    //                         "Content-Type": "application/json",
    //                     },
    //                     body: JSON.stringify(user_secret_info),
    //                 }
    //             )
    //                 .then(res => res.json())                                                //POST user data to database
    //                 .then(user_secret_info => {
    //                     console.log(user_secret_info);
    //                     if (user_secret_info.insertedId) {
    //                         Swal.fire({
    //                             title: 'success',
    //                             text: 'You successfully Logged in!',
    //                             icon: 'success',
    //                             confirmButtonText: '🥰K',
    //                         })
    //                         navigate(from, { replace: true });
    //                     }
    //                     //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    //                     //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
    //                     //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  
    //                     Swal.fire({
    //                         title: 'success',
    //                         text: 'You successfully Logged in!',
    //                         icon: 'success',
    //                         confirmButtonText: '🥰K',
    //                     })
    //                     navigate(from, { replace: true });
    //                 })
    //         })
    //         .catch(err => set_error_Message(err.message));
    // };

    return (
      

        <div
            className=" bg-no-repeat bg-center md:mt-[4.6em] pt-[5.7em] md:pt-0 mt-9 " style={{ backgroundImage: `url(${img})` }}
        >

            <div className='py-9'>
                <section className='border-0 border-t-[1.4px] border-slate-200  w-[80%]  md:w-[70%] mx-auto  shadow-2xl'>
                    {/* <img className='w-[36%]' src={img} alt="" /> */}

                    <div className='md:w-[35%] w-[80%] mx-auto bg-transparent'>
                    <form action='' onSubmit={Handle_Submit} className=''>
                            <p className='text-center text-[#403f3f] font-[1000] text-[.911em]  md:text-[2em] animate-charcter'>Sign Up</p>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Name </p>
                                <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Type here' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                                <p className='pt-1 md:pt-2'><input name='image' id="image" type='file' accept='image/*' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Email </p>
                                <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" defaultValue={"@gmail.com"} className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Password</p>
                               <div className='relative'><p className='pt-1 md:pt-2'><input name='password' id="password" type={passwordShown ? "text" : "password"}  placeholder='Enter your Password' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p> <div className='absolute top-5 right-4'>{passwordShown ? <FontAwesomeIcon onClick={togglePassword} className='text-[#f8a674]' icon={faEyeSlash} /> : <FontAwesomeIcon onClick={togglePassword} className='text-[#a70b0c]' icon={faEye} />} </div></div>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Conform Password</p>
                                <div className='relative'><p className='pt-1 md:pt-2'><input name='conf' id="conf" type={passwordShown0 ? "text" : "password"}  placeholder='Enter your Password' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p> <div className='absolute top-5 right-4'>{passwordShown0 ? <FontAwesomeIcon onClick={togglePassword0} className='text-[#f8a674]' icon={faEyeSlash} /> : <FontAwesomeIcon onClick={togglePassword0} className='text-[#a70b0c]' icon={faEye} />} </div></div>
                            </div>


                            <div className=' mx-auto pt-3 md:pb-2 pb-1'>
                                <p onClick={handleClick} className='pt-1 md:pt-2'><input type="submit" value="Sign In" className={`${isScaled ? 'scale-90' : ''}  bg-gradient-to-r from-[#c32629] to-[#e5b235]  duration-300  rounded-md cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em] `} /></p>
                                <Link to="/login"><div className='text-center '> <button className='text-[#D1A054]  md:text-[.85em] hover:text-blue-500 pt-1 text-[.55em] link'>Already registered? <span className='font-bold'> Go to log in</span></button></div></Link>
                            </div>
                            {/* <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p> */}
                            {/* <p className='text-center font-bold text-[1.5em] animate-charcter'>{error_Message}</p> */}
                        </form>
                    </div>
                    <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p>
                    <p className='text-center font-bold text-[1.5em] animate-charcter'>{error_Message}</p>

                </section>
            </div>
        </div>

    );
};

export default Register;

