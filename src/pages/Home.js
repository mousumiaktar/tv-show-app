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
        <div>
            {shows.map(show => <AllShows 
            key={show.show.id}
            show={show}
            />
            )}
        </div>
    );
};

export default Home;