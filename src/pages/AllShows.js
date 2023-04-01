import React from 'react';
import { Link } from 'react-router-dom';

const AllShows = ({ show }) => {
    const { image, name, language, id } = show.show
    return (
        <div>
            <img className='md:h-[250px] md:w-[150]' src={image?.medium} alt="" />
            <h4 className='text-xl font-bold'>{name}</h4>
            <p><span className='font-bold'>Language:</span> {language}</p>
            <Link to={`/shows/${id}`}><button className='bg-blue-500 text-white px-2 mt-2 rounded-sm hover:bg-blue-700 duration-150'>Summery</button></Link>
        </div>
    );
};

export default AllShows;