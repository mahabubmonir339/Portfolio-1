import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../../assets/Home/my-pic-1.jpg'

const Home = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] p-10'>
            <div className="hero min-h-screen text-white m-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={HomeImage} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='ml-12'>
                        <h1 className="text-5xl text-center font-bold">I'M MAHABUB HOSSEN MONIR. <hr /> WEB DEVELOPER</h1>
                        <p className="py-6 text-center">I'm a Tunisian based web designer and developer. Front-end & back-end focused on crafting clean & user-frindly experiences, I am passionate building excellent software that improves the lives of those around me.</p>
                        <p className='grid justify-items-end m-4'><button class="btn btn-outline text-white rounded-full border-2 border-Y"><Link to='/contract'>Contract Me <i class="fa-solid fa-arrow-up-right-from-square ml-4"></i></Link></button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="btn-group grid grid-cols-1">
                <p className='grid justify-items-center m-4'><button class="btn btn-outline text-white"><Link to='/about'> ABOUT <i class="fa-solid fa-arrow-right text-Y ml-4"></i></Link></button></p>
            </div>
        </div>
    );
};

export default Home;