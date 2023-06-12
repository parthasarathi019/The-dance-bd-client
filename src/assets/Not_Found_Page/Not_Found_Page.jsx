//eslint-disable-next-line
import React from 'react';
import './Not_Found_Page.css'
import { Link } from 'react-router-dom';
const Not_Found_Page = () => {
    // useTitle('404 error')
    return (
        <div className='mt-7 md:mb-10'>
            <body>
                <section className="notFound">
                    <div className="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </div>
                    <div className="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?
                            <div className='flex gap-x-4'>
                                <p><Link to="/" className="bg-black">YES</Link></p>
                                <p><Link className="bg-black" to="#">NO</Link></p>
                            </div>
                        </h3>
                    </div>
                </section>
            </body>
        </div>
    );
};

export default Not_Found_Page;
//
