import React from 'react';

const AllShows = ({show}) => {
    const{name} = show.show
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default AllShows;