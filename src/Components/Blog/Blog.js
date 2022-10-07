import React from 'react';
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] h-full p-10'><br /><br />
            <section className='text-5xl font-bold text-white'>MY <span className='text-Y'>BLOG</span></section><br /><br />
            <section className='grid grid-cols-4 gap-4 place-items-center h-full m-10'>
                <div class="card card-compact w-80 h-80 bg-[#475569] shadow-xl">
                    <figure><img className="max-w-full h-auto img-fluid" src="https://img.freepik.com/free-photo/communication-connection-message-networking_53876-133681.jpg?w=1060&t=st=1665072418~exp=1665073018~hmac=edb619037fcc979ff0fd7457df29449017958a3c3fc4cf8633089c5b01ac83f9" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-Y">How to Won Your Audience by Creating an Email List.</h2>
                    </div>
                </div>
                <div class="card card-compact w-80 h-80 bg-[#475569] shadow-xl">
                    <figure><img className="max-w-full h-auto" src="https://img.freepik.com/premium-photo/concentrated-teenage-girl-reading-book-front-laptop-getting-ready-exam-sitting-floor-home_116547-31283.jpg?w=1060" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-Y">Top 10 Toolkit for Deep Learning.</h2>
                    </div>
                </div>
                <div class="card card-compact w-80 h-80 bg-[#475569] shadow-xl">
                    <figure><img className="max-w-full h-auto" src="https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?w=1060&t=st=1665076527~exp=1665077127~hmac=d4cc9f73c2b821f951879778347e4c7b75a580056d8e613c1f82eb2680157f6e" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-Y">Everyting You Need to Know About Web Accessibility.</h2>
                    </div>
                </div>
                <div class="card card-compact w-80 h-80 bg-[#475569] shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/laptop-which-there-is-world-people-drawn_1232-288.jpg?w=1060&t=st=1665099308~exp=1665099908~hmac=117b474b9012ea9964a7d877876e424e20607959106b70eff4467fe032e592d1" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-Y">Hole Company Networking System Create.</h2>
                    </div>
                </div>
            </section ><br />
            <div class="btn-group grid grid-cols-2">
                <p className='grid justify-items-end m-4'><button class="btn btn-outline text-white"><Link to='/contract'><i class="fa-solid fa-arrow-left text-Y mr-4"></i> Contract </Link></button></p>

                <p className='grid justify-items-start m-4'><button class="btn btn-outline text-white"><Link to='/' > Home <i class="fa-solid fa-arrow-right text-Y ml-4"></i></Link></button></p>
            </div>

        </div >
    );
};

export default Blog;