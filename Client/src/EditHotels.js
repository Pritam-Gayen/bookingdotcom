import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditHotels({ userName }) {
    const [hotels, setHotels] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        // Fetch hotels from server (replace with your actual API call)
        const fetchHotels = async () => {
            const response = await fetch('https://bookingdotcom-gkgr.onrender.com/hotels'); // Replace with your API endpoint
            const data = await response.json();
            setHotels(data.hotel);
        };

        fetchHotels();
    }, []);

    const handleAddProperty = () => {
        // navigate('/addproperty'); // Assuming '/add-property' is the route for adding a new hotel
        console.log("hotels ",hotels);
    };

    const filteredHotels = hotels.filter(hotel => hotel.hotelowner === userName);

    return (
        <div>
            <button onClick={handleAddProperty}>Add Property</button>
            {filteredHotels.map(hotel => (
                <div key={hotel.id}>
                    {/* Display hotel details here */}
                    <h3>{hotel.name}</h3>
                    <p>{hotel.address}</p>
                    {/* ... other hotel details ... */}
                    {/* Add buttons for editing and deleting hotels */}
                </div>
            ))}
        </div>
    );
}

export default EditHotels;