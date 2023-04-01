import React, { useEffect, useState } from 'react';
import AllShows from './AllShows';

const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            setShows(data);
        };
        fetchShows();
    }, []);
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8'>
                {shows.map(show => <AllShows
                    key={show.show.id}
                    show={show}
                />
                )}
            </div>
        </div>
    );
};

export default Home;