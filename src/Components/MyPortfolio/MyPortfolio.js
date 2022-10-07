import React from 'react';
import { Link } from "react-router-dom";
import p1 from '../../assets/project-1.jpg';
import p2 from '../../assets/project-2.jpg';
import p3 from '../../assets/project-3.jpg';
import p4 from '../../assets/project-4.jpg';
import p5 from '../../assets/project-5.jpg';
import p6 from '../../assets/project-6.jpg';
import p7 from '../../assets/project-7.jpg';
import p8 from '../../assets/project-8.jpg';
import p9 from '../../assets/project-9.jpg';

const MyPortfolio = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] text-white p-10'> <br /><br />
            <section className='text-5xl font-bold'>MY <span className='text-Y'>PORTFOLIO</span></section><br /><br />
            <section className='grid grid-cols-3 gap-4 place-items-center h-full m-10'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Design</h2>
                        <div className="card-actions justify-center">
                            <p>UI/UX perfect pixel design</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Animetion</h2>
                        <div className="card-actions justify-center">
                            <p>Amimetion Base Web Design.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Auto-Mobile</h2>
                        <div className="card-actions justify-center">
                            <p>Menufecturing Company Web Design.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Restaurant</h2>
                        <div className="card-actions justify-center">
                            <p>Great restaurant website designs.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Shoes</h2>
                        <div className="card-actions justify-center">
                            <p>Shoes store design. </p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">Flower Shop</h2>
                        <div className="card-actions justify-center">
                            <p>Flower Shop Website.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">......</h2>
                        <div className="card-actions justify-center">
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p8} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">.....</h2>
                        <div className="card-actions justify-center">
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={p9} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-Y">......</h2>
                        <div className="card-actions justify-center">
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
            <div class="btn-group grid grid-cols-2">
                <p className='grid justify-items-end m-4'><Link to='/about'><button class="btn btn-outline text-white"><i class="fa-solid fa-arrow-left text-Y mr-4"></i> About </button></Link></p>

                <p className='grid justify-items-start m-4'><Link to='/contract'><button class="btn btn-outline text-white">Contract<i class="fa-solid fa-arrow-right text-Y ml-4"></i></button></Link></p>
            </div>
        </div>
    );
};

export default MyPortfolio;