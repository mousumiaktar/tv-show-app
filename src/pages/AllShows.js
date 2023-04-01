import React from 'react';

const AllShows = ({show}) => {
    const{image, name, language, id} = show.show
    return (
        <div>
            <img src={image?.medium} alt="" />
            <h1>{name}</h1>
            <h3>{language}</h3>
        </div>
    );
};

export default AllShows;