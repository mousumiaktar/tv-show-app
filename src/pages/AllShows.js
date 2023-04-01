import React from 'react';
import { Link } from 'react-router-dom';

const AllShows = ({show}) => {
    const{image, name, language, id} = show.show
    return (
        <div>
            <img src={image?.medium} alt="" />
            <h1>{name}</h1>
            <h3>{language}</h3>
            <Link to={`/shows/${id}`}>Summery</Link>
        </div>
    );
};

export default AllShows;