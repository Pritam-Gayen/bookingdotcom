// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const HotelForm = () => {
//   const [hotelName, setHotelName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [description, setDescription] = useState('');
//   const [rating, setRating] = useState('');
//   const [hotelOwner, setHotelOwner] = useState('');
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 8) {
//       alert('Please select a maximum of 8 images.');
//       return;
//     }
//     setImages([...images, ...files]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to server
//     console.log({
//       hotelName,
//       address,
//       city,
//       description,
//       rating,
//       hotelOwner,
//       images,
//     });
//     Navigate('/edithotels');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="hotelName">Hotel Name:</label>
//         <input
//           type="text"
//           id="hotelName"
//           value={hotelName}
//           onChange={(e) => setHotelName(e.target.value)}
//         />
//       </div>
//       {/* ... other input fields for address, city, description, rating, and hotelOwner ... */}
//       <div>
//         <label htmlFor="images">Images:</label>
//         <input type="file" id="images" multiple onChange={handleImageChange} />
//         {images.map((image, index) => (
//           <p key={index}>{image.name}</p>
//         ))}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default HotelForm;