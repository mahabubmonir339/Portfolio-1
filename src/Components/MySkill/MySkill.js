import React from 'react';
import { Link } from 'react-router-dom';

const MySkill = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] text-white p-10'><br />
            <section className='text-5xl font-bold'>My <span className='text-Y'>Skill</span></section><br /><br />
            <section className='grid grid-cols-3 gap-4 h-full m-10'>
                <div className='grid justify-around col-span-1 border border-2 border-Y p-10'>
                    <br /><h1 className='text-3xl font-bold'>Professional Skills</h1><br />
                    <br /><h3 className='text-start'>CODING LANGUAGE: <span className='text-l font-bold'> HTML5, CSS3,
                        JavaScript, NodeJS, C++, Python.</span></h3>
                    <br /><h3 className='text-start'>FRAMEWORK: <span className='text-l font-bold'>Bootstrap,
                        TailwindCSS, ReactJS, ExpressJS.</span></h3>
                    <br /><h3 className='text-start'>DATABASE: <span className='text-l font-bold'> Mysql, MongoD.</span></h3>
                    <br /><h3 className='text-start'>AUTHENTICATION: <span className='text-l font-bold'>Firebase.</span></h3>
                    <br /><h3 className='text-start'>Dev Tools:  <span className='text-l font-bold'>Git, Npm.</span></h3>

                </div>
                <div className='grid justify-around col-span-1 border border-2 border-Y p-10'>
                    <br /><h1 className='text-3xl font-bold'>Soft Skills</h1><br />
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Observation</h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Decision making</h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Communication</h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Dedication</h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Multi-tasking</h3>

                </div>
                <div className='grid justify-around col-span-1 border border-2 border-Y p-10'>
                    <br /><h1 className='text-3xl font-bold'>Education Background</h1><br />
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Bachelor of Science in Computer Science Engineering (B.sc in CSE)
                        <br /> University : Institute of Science and Technology (IST).
                        <br /> Passing Year : 2018
                    </h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Higher Secondary School Certificate (HSC)
                        <br /> Group : Science
                        <br /> College : Rajbari Govt. College, Rajbari.
                        <br /> Board : Dhaka
                        <br /> Passing Year : 2014
                    </h3>
                    <br /><h3 className='text-start font-bold'><span className='text-start text-4xl text-[#ef4444] font-bold'>.</span> Secondary School Certificate (SSC)
                        <br />  Group : Science
                        <br />  School : Ankur School and College, Rajbari.
                        <br />  Board : Dhaka.
                        <br />  Passing Year : 2012
                    </h3>
                </div>
                <div className='grid justify-around col-span-1'>
                    <br /><button class="btn rounded-full border-2 border-Y">DOWNLOAD CV <span><i class="fa-solid fa-download text-Y ml-4"></i></span></button>
                </div>
            </section>
            <div class="btn-group grid grid-cols-1">
                <Link to='/about' className='grid justify-items-center m-4'><button class="btn btn-outline text-white">ABOUT</button></Link>
            </div>
        </div>
    );
};

export default MySkill;