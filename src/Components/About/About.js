import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../../assets/Document/MahabubCV.pdf';

const About = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] text-white p-10'> <br />
            <section className='text-5xl font-bold'>ABOUT <span className='text-Y'>ME</span></section><br />
            <section className='grid grid-cols-4 gap-4 h-full m-10'>
                <div className='grid justify-around col-span-1'>
                    <h1 className='text-3xl font-bold'>PARSONAL INFOS</h1><br />
                    <h3 className='text-start'>FAST NAME: <span className='text-l font-bold'> MAHABUB HOSSEN</span></h3>
                    <h3 className='text-start'>LAST NAME: <span className='text-l font-bold'>MONIR</span></h3>
                    <h3 className='text-start'>AGE: <span className='text-l font-bold'> 25 YEAR</span></h3>
                    <h3 className='text-start'>Nationallity: <span className='text-l font-bold'>Bangladeshi</span></h3>
                    <h3 className='text-start'>Freelance:  <span className='text-l font-bold'>Available</span></h3>
                    <a href={cv} download><button class="btn rounded-full border-2 border-Y">DOWNLOAD CV <span><i class="fa-solid fa-download text-Y ml-4"></i></span></button></a>
                </div>
                <div className='grid justify-around col-span-1'><br /><br />
                    <h3 className='text-start'>Address: <span className='text-l font-bold'>  Dhaka, Banhladesh.</span></h3>
                    <h3 className='text-start'>Phone: <span className='text-l font-bold'> 01763000339 / 01627668383</span></h3>
                    <h3 className='text-start'>Mail: <span className='text-l font-bold'> mahabubhossenmonir@gmail.com</span></h3>
                    <h3 className='text-start'>Language: <span className='text-l font-bold'> Bangla , English</span></h3>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold'>WORK INFOS</h1><br />
                    <div className='grid grid-cols-2 gap-16 mt-16 justify-items-center'>
                        <div className="card w-48 h-40 gap-16 text-primary-content border-2 border-rose-600">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-Y">2+</h2>
                                <div className="card-actions justify-end">
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-48 h-40 gap-16 text-primary-content border-2 border-rose-600">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-Y">10+</h2>
                                <div className="card-actions justify-end">
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-48 h-40 gap-16 text-primary-content border-2 border-rose-600">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-Y">30+</h2>
                                <div className="card-actions justify-end">
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-48 h-40 gap-16 text-primary-content border-2 border-rose-600">
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold text-Y">5</h2>
                                <div className="card-actions justify-end">
                                    <p>Won Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br /><br />
            <br />
            <section><p className='grid justify-items-end m-4'><Link to='/skill'><button class="btn btn-outline text-white rounded-full border-2 border-Y">MY SKILL <i class="fa-solid fa-arrow-up-right-from-square ml-4"></i></button></Link></p>
            </section><br /><br />
            <div class="btn-group grid grid-cols-2">
                <p className='grid justify-items-end m-5'><Link to='/'><button class="btn btn-outline text-white"><i class="fa-solid fa-arrow-left text-Y mr-4"></i> Home </button></Link></p>
                <p className='grid justify-items-start m-5'><Link to='/myPortfolio'><button class="btn btn-outline text-white"> My Portfolio <i class="fa-solid fa-arrow-right text-Y ml-4"></i></button> </Link></p>
            </div>
        </div>
    );
};

export default About;