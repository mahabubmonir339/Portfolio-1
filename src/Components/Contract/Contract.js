import React from 'react';
import { Link } from "react-router-dom";


const Contract = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] text-white h-full p-10'><br /><br />
            <section className='text-5xl font-bold'>GET IN <span className='text-Y'>TOUCH</span></section><br /><br />
            <section className='grid grid-cols-3 gap-4 h-full m-10'>
                <div className='grid justify-around col-span-1 text-start'>
                    <h1 className='text-4xl font-bold text-start'>DON'T BE SHY!</h1><br />
                    <p className='text-start'>Feel free to get in touch with me. <br /> I'm always open to discussing new projects, <br /> creative ideas or opportunities to be part of your visions.</p><br /><br />
                    <span className='inline-flex gap-4'>
                        <span><i class="fa-regular fa-envelope text-5xl text-Y"></i></span>
                        <span className='grid grid-rows-2'>
                            <span className='font-bold'>MAIL ME</span>
                            <span>mahabubhossenmonir@gmail.com</span>
                        </span>
                    </span>
                    <br />
                    <br />
                    <span className='inline-flex gap-4'>
                        <span><i class="fa-solid fa-phone text-5xl text-Y"></i></span>
                        <span className='grid grid-rows-2'>
                            <span className='font-bold'>CALL ME</span>
                            <span>01763000339/01627668383</span>
                        </span>
                    </span>
                    <br /><br />
                    <span className='inline-flex gap-4 text-2xl'>
                        <a href="https://www.facebook.com/mahabubmonir339" target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/mahabub-hossen-monir-3a3a89202/" target='_blank' rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/mahabub-hossen-monir-3a3a89202/" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/mahabubmonir339" target='_blank' rel="noreferrer"><i class="fa-brands fa-square-github"></i></a>
                    </span>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 justify-around gap-4'>
                        <input type="text" placeholder="YOUR MANE" className="input input-bordered w-full max-w-xs bg-[#475569]" />
                        <input type="text" placeholder="YOUR EMAIL" className="input input-bordered w-full max-w-xs bg-[#475569]" />
                        <input type="text" placeholder="YOUR SUBJECT" className="input input-bordered w-full max-w-xs bg-[#475569]" />
                        <textarea className="textarea textarea-bordered col-start-1 col-span-2 justify-around h-48 bg-[#475569]" placeholder="Bio"></textarea>
                    </div>
                    <br /><br />
                    <div className='flex justify-start'>
                        <button class=" rounded-full w-64 h-10 border-2 border-Y text-2xl ">  SEND MESSAGE  <i class="fa-regular fa-envelope-open text-Y ml-4"></i></button>
                    </div>
                </div>
            </section>
            <div class="btn-group grid grid-cols-2">
                <Link to='/myPortfolio' className='grid justify-items-end m-4'><button class="btn btn-outline text-white"><i class="fa-solid fa-arrow-left text-Y mr-4"></i> MY PORTFOLIO </button></Link>

                <Link to='/blog' className='grid justify-items-start m-4'><button class="btn btn-outline text-white">MY BLOG<i class="fa-solid fa-arrow-right text-Y ml-4"></i></button></Link>
            </div>
        </div>
    );
};

export default Contract;