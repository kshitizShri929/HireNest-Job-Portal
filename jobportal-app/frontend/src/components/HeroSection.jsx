// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>India No.1 webside for Job hundinting </span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    if (query.trim()) {
      dispatch(setSearchedQuery(query));
      navigate('/browse');
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Tagline */}
        <div className="inline-block bg-purple-100 text-[#6A38C2] px-4 py-2 rounded-full text-sm font-medium mb-4">
          India’s No.1 Platform for Job Hunting
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Find Your <span className="text-[#6A38C2]">Dream Job</span><br /> in Seconds
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-8">
          Explore thousands of job opportunities across top companies. Apply with ease, track your applications, and land your perfect role today.
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center max-w-xl mx-auto bg-white border border-gray-300 shadow-md rounded-full overflow-hidden px-4 py-2">
          <input
            type="text"
            placeholder="Search jobs by title, skill or company..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-sm md:text-base px-2 py-2"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full px-4 bg-[#6A38C2] hover:bg-[#5b30a6] text-white"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
