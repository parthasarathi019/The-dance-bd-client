import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Nav_With_Banner from "./Components/Header/Nav_With_Banner";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProviders from "./Providers/AuthProviders";
import Home_Page from "./Components/Home_Page/Home_Page";
import Dance_Class_Detail from "./Components/Dance_Class_Detail/Dance_Class_Detail";
import Instructors from "./Components/Instructors/Instructors";
import Dashboard from "./Dashboard/Dashboard";
import Not_Found_Page from "./assets/Not_Found_Page/Not_Found_Page";
import Default_Dashdoard from "./Dashboard/Default_Dashdoard";
import Feed_Back from "./Dashboard/Admin/Feed_Back/Feed_Back";
import Manage_Users from "./Dashboard/Admin/Manage_Users/Manage_Users";
import My_Classes from "./Dashboard/Instructor/My_Classes/My_Classes";
import Update_Class from "./Dashboard/Instructor/Update_Class/Update_Class";
import My_Selected_Classes from "./Dashboard/User/My_Selected_Classes/My_Selected_Classes";
import Payment from "./Dashboard/User/Payment/Payment";
import My_Enrolled_Classes from "./Dashboard/User/My_Enrolled_Classes/My_Enrolled_Classes";
import Peyment from "./Dashboard/User/Peyment/Peyment";
import Admin_Route from "./Admin_Route/Admin_Route";
import Instructor_Route from "./Instructor_Route/Instructor_Route";
import Payment_History from "./Dashboard/User/Payment_History/Payment_History";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav_With_Banner></Nav_With_Banner>,
    children: [
      {
        path: "/",
        element: <Home_Page></Home_Page>,
      },
      {
        path: "/Dance_Class",
        element: <Dance_Class_Detail></Dance_Class_Detail>,
      },
      {
        path: "/Instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      }
 
    ],
  },
  {
    path: "/Dashboard",
    element: <Dashboard></Dashboard>,
    children: [
     
      {
        path: "Home",
        element: <Default_Dashdoard></Default_Dashdoard> ,
      },
      {
        path: "Manage_Users",
        element: <Admin_Route><Manage_Users></Manage_Users></Admin_Route> ,
      },
      {
        path: "My_Classes",
        element: <Instructor_Route><My_Classes></My_Classes></Instructor_Route>
      },
      {
        path: "My_Selected_Classes",
        element: <My_Selected_Classes></My_Selected_Classes> ,
      },
      {
        path: "My_Enrolled_Classes",
        element: <My_Enrolled_Classes></My_Enrolled_Classes> ,
      },
      {
        path: "Peyment",
        element: <Peyment></Peyment> ,
      },
      {
        path: "Payment_History",
        element: <Payment_History></Payment_History> ,
      },
    ],
  },
  {
    path: "/Feed_Back/:id",
    element: <Admin_Route><Feed_Back></Feed_Back></Admin_Route> ,
    loader: ({params}) => fetch(`http://localhost:7000/Dance_Class/${params.id}`)

  },
  {
    path: "/Update_Class/:id",
    element:<Instructor_Route> <Update_Class></Update_Class></Instructor_Route>,
    loader : ({params}) => fetch(`http://localhost:7000/dance_class_for_Instructor/${params.id}`)
  },
  {
    path: "Payment/:id",
    element: <Payment></Payment>,
    loader : ({params}) => fetch(`http://localhost:7000/payment_for_user/${params.id}`)
  },
  {
    path: "*",
    element:<Not_Found_Page></Not_Found_Page> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <section >
          <RouterProvider router={router} />
        </section>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
