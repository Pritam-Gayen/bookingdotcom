import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotelForm = ({ userEmail }) => {
    const [hotelName, setHotelName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [hotelOwner, setHotelOwner] = useState('');
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 8) {
            alert('Please select a maximum of 8 images.');
            return;
        }
        setImages([...images, ...files]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        hotelData={
            name: hotelName,
            address: address,
            city: city,
            description: description,
            rating: rating,
            hotelwoner: setHotelOwner(userEmail),
        }
        console.log("hotelData ", hotelData);
        navigate('/edithotels');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="hotelName">Hotel Name:</label>
                <input
                    type="text"
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="address">Hotel Address:</label>
                <input
                    type="text"
                    id="hotelAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="description">Hotel Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="rating">Hotel Rating:</label>
                <input
                    type="text"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="images">Images:</label>
                <input type="file" id="images" multiple onChange={handleImageChange} />
                {images.map((image, index) => (
                    <p key={index}>{image.name}</p>
                ))}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default HotelForm;