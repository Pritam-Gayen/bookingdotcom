import React, { useState, useEffect } from 'react';
import './EditHotels.css';
import { useNavigate } from 'react-router-dom';

function EditHotels({ userEmail }) {
    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setfilteredHotels] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch('https://bookingdotcom-gkgr.onrender.com/hotels');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setHotels(data.hotels); // Assuming your API returns "hotel" as the key for the list
                console.log(data.hotels);
            } catch (error) {
                console.error('Error fetching hotels:', error);
                // Handle errors gracefully, e.g., display an error message to the user
            }
        };

        fetchHotels();
    }, []);

    useEffect(() => {
        console.log(userEmail);
        if (hotels && userEmail) {
            setfilteredHotels(hotels.filter(hotel => hotel.hotelwoner === userEmail));
        } else {
            setfilteredHotels([]); // Set to empty array if no hotels or email
        }
    }, [hotels, userEmail]);


    const handleAddProperty = () => {
        navigate('/addproperty'); // Assuming '/add-property' is the route for adding a new hotel
        // console.log("filtered hotels ", filteredHotels);
    };

    return (
        <div>
            <button className="add-property-btn" onClick={handleAddProperty}>Add Property</button>
            {filteredHotels.map(hotel => (
                <div className="hotel-edit-card" key={hotel.id}>
                    {/* Display hotel details here */}
                    <h3>{hotel.name}</h3>
                    <h4>{hotel.city}</h4>
                    <h5>{hotel.rating}</h5>
                    <p>{hotel.address}</p>
                    <p>{hotel.description}</p>
                    {/* Add buttons for editing and deleting hotels */}
                </div>
            ))}
        </div>
    );
}

export default EditHotels;