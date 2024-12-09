import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HotelForm.css';
const HotelForm = ({ userEmail }) => {
    const [hotelName, setHotelName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle form submission here, e.g., send data to server
        const formData = new FormData();

        const hotelData = {
            name: hotelName,
            address: address,
            city: city,
            description: description,
            rating: rating,
            hotelwoner: userEmail,
            images: images
        };

        formData.append('hotel', JSON.stringify(hotelData));

        // Handle multiple image uploads
        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append(`images[${i}]`, images[i]);
            }
        }


        try {
            const response = await axios.post('https://bookingdotcom-gkgr.onrender.com/addhotel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Handle response
            console.log(response);
            navigate('/edithotels');
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className='hotel-form-input'>
                <label htmlFor="hotelName">Hotel Name:</label>
                <input
                    type="text"
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                />
            </div>

            <div className='hotel-form-input'>
                <label htmlFor="address">Hotel Address:</label>
                <input
                    type="text"
                    id="hotelAddress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div className='hotel-form-input'>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className='hotel-form-input'>
                <label htmlFor="description">Hotel Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className='hotel-form-input'>
                <label htmlFor="rating">Hotel Rating:</label>
                <input
                    type="text"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>

            <div className='hotel-form-input'>
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