import React from 'react';
import { Link } from 'react-router-dom';

const MySkill = () => {
    return (
        <div className='container mx-auto bg-[#0f172a] text-white p-10'><br />
            <section className='text-5xl font-bold'>My <span className='text-Y'>Skill</span></section><br /><br />
            <div class="btn-group grid grid-cols-1">
                <Link to='/about' className='grid justify-items-center m-4'><button class="btn btn-outline text-white">ABOUT</button></Link>
            </div>
        </div>
    );
};

export default MySkill;