//eslint-disable-next-line
import React from 'react';
import './Instructors.css';
import useInstructor from '../../../Hooks/useInstructor';
const Instructors = () => {
  const [instructors, loading] = useInstructor()
  if ( loading ) {
    return <div className='text-center text-[4.4em] py-3  text-red-600 font-bold'>Loading...</div>
  }
  return (
    <table className='mt-[4em] md:max-w-[1280px] mx-auto'>
      <caption>Our Instructors</caption>
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
          instructors.map(instructor => <tr key={instructor._id}>
            <td data-label="Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={instructor.img_url} alt="" /></td>
            <td data-label="Name">{instructor.name}</td>
            <td data-label="Email">{instructor.email}</td>
          </tr>)
        }
      </tbody>
    </table>
  );
};

export default Instructors;
