//eslint-disable-next-line
import React from 'react';
import './Popular_Instractor_Section.css';
import useInstructor from '../../../../Hooks/useInstructor';
import { Link } from 'react-router-dom';
import Instructors_Card from './Instructors_Card/Instructors_Card';
const Popular_Instractor_Section = () => {
  const [instructors, loading] = useInstructor()
  if ( loading ) {
    return <div className='text-center text-[4.4em] py-3  text-red-600 font-bold'>Loading...</div>
  }
  return (
    <div className='pt-[2em] pb-7 px-2 md:px-0'>
    <div className='py-3'>
        <p className='text-center md:text-[2.5em] font-semibold'>Popular Instructors</p>
        <p className='text-center md:text-[1.2em] font-semibold'>Choose your instructor</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8'>
        {

instructors?.slice(0, 6).map(classs => <Instructors_Card key={classs._id} classs={classs}></Instructors_Card>)

        }
    </div>
    <Link to='/Instructors'>
        <div className="text-center pt-[3.1em]">
            <a className="btn" href="#" style={{ '--color': '#1e9bff' }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                See All
            </a>
        </div>
    </Link>
</div>
  );
};

export default Popular_Instractor_Section;