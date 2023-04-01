import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShow = async () => {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            setShow(data);
        };
        fetchShow();
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={show.image?.medium} alt="" />
            <h1>{show.name}</h1>
            <p>{show.summary}</p>
        </div>
    );
}

export default ShowDetails;