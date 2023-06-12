import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const My_Enrolled_Classes = () => {
      //   useTitle('My Toys')
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { data: My_Pay = [], } = useQuery(['My_Pay'], async () => {
    const res = await axiosSecure.get(`/mypaydata?email=${user?.email}`)
    return res.data;
  })
    return (
        <table className='mt-[4em] md:max-w-[1280px] mx-auto'>
        <caption>--- My Enrolled Classes ---</caption>
        <thead>
          <tr>
            <th className='bg-red-400  clipo2' scope="col">Image</th>
            <th className='bg-red-400  clipo2' scope="col">Class Name</th>
            <th className='bg-red-400  clipo2' scope="col">Class Price</th>
            <th className='bg-red-400  clipo2' scope="col">Enrolment Date</th>
          </tr>
        </thead>
        <tbody>
          {
            My_Pay.map(Pay => <tr key={Pay._id}>
              <td className='flex justify-center py-1' data-label="Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={Pay.img_url} alt="" /></td>
              <td data-label="Class Name">{Pay.class_name}</td>
              <td data-label="Class Price">{Pay.class_price}</td>
              <td data-label="Enrolment Date">{Pay.date}</td>
            </tr>)
          }
        </tbody>
      </table>
    );
};

export default My_Enrolled_Classes;