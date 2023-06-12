//eslint-disable-next-line
import React from 'react';
import useClass from '../../../../Hooks/useClass';
import Dance_Class_Card from './Dance_Class_Card/Dance_Class_Card';
import './Dance_Class_Section.css'
import { Link } from 'react-router-dom';

const Dance_Class_Section = () => {
    const [classes, loading] = useClass()
    if (loading) {
        return <div className='text-center text-[4.4em] py-3 text-red-600 font-bold'>Loading...</div>
    }
    return (
        <div className='pt-[.5em] pb-7 px-2 md:px-0'>
            <div className='py-3'>
                <p className='text-center md:text-[2.5em] font-semibold'>Popular Classes</p>
                <p className='text-center md:text-[1.2em] font-semibold'>Choose your Class</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8'>
                {

                    classes?.slice(0, 6).map(classs => <Dance_Class_Card key={classs._id} classs={classs}></Dance_Class_Card>)

                }
            </div>
            <Link to='/Dance_Class'>
                <div className="text-center pt-[3.1em]">
                    <a className="button" href="#" style={{ '--color': '#ff1867' }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        See All
                    </a>
                </div>
            </Link>
        </div>
    )
};

export default Dance_Class_Section;
