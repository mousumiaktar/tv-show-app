import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      console.log(data);
    };
    fetchShow();
  }, [id]);

  

  return (
    <div>
      
    </div>
  );
}

export default ShowDetails;