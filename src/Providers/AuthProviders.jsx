//eslint-disable-next-line
import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , GoogleAuthProvider ,signInWithPopup, /* GithubAuthProvider */ /* sendPasswordResetEmail */ } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null)

const auth = getAuth(app);
const Goog_leAuth_Provider = new GoogleAuthProvider();
// const Github_Auth_Provider = new GithubAuthProvider();


const AuthProviders = ( {children}) => {
    const [user , setuser] = useState(null)
    const [loading , setloading] = useState(true)

    const Create_User = (email , passward) => {
        setloading(true)/////////////////7777
        return createUserWithEmailAndPassword (auth ,email, passward )
     }

    const User_Login = (email , passward) => {
        setloading(true)//////////////////88888
        return signInWithEmailAndPassword (auth ,email, passward )
     }
    const Google_Login = () => {
        return signInWithPopup(auth, Goog_leAuth_Provider)
     }
    // const Github_Login = () => {
    //     return signInWithPopup(auth, Github_Auth_Provider)
    //  }
    // const Forget_Password = (reset_email) => {
    //     return sendPasswordResetEmail(auth, reset_email)
    //  }
    
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            setuser(current_user)
            console.log(current_user);
//𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢
if (current_user) {
    axios.post('http://localhost:7000/jwt' , {email: current_user.email})
    .then(data => {
        console.log(data.data.token)
        localStorage.setItem('dance-studio-access-token' , data.data.token)
        setloading(false)
    })
}else{
    localStorage.removeItem('dance-studio-access-token')
}
setloading(false)
//𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢||𝓙𝓦𝓣💚𝓐𝓧𝓘𝓞𝓢

            
            return () => {
                unsubscribe();
            }
          });
    },[])

    const Log_Out = () => {
        return signOut(auth)
    }
    const Auth_Info = {
        user,
        loading,
        Create_User,
        User_Login,
        Log_Out,
        Google_Login,
       /*  Github_Login,
        Forget_Password */
       }
    return (
        <AuthContext.Provider value={Auth_Info}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;