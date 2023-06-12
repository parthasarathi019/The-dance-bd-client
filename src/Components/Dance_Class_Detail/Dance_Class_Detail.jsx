//eslint-disable-next-line
import React from 'react';
// import Dance_Class_Card from './Dance_Class_Card/Dance_Class_Card';
import useClass from '../../../Hooks/useClass';
import Dance_Detail_Card from './Dance_Detail_Card/Dance_Detail_Card';


const Dance_Class_Detail = () => {
    const [classes , loading] = useClass()
    if ( loading ) {
        return <div className='text-center text-[4.4em] py-3 md:max-w-[1280px] mx-auto text-red-600 font-bold'>Loading...</div>
      }
    return (
        <div className='pt-[4em] pb-7 px-2 md:px-0 md:max-w-[1280px] mx-auto'>
            <div className='py-3'>
                <p className='text-center md:text-[2.5em] font-semibold'>Class Details</p>
                <p className='text-center md:text-[1.2em] font-semibold'>Choose your Class</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8'>
                {

                    classes.map(classs => <Dance_Detail_Card key={classs._id} classs={classs}></Dance_Detail_Card>)

                }
            </div>
        </div>
    )
};

export default Dance_Class_Detail;
