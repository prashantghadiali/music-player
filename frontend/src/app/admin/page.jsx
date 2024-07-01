import React from 'react'
const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs');

const page = () => {
    
    
    const formData = new FormData();
    formData.append('title', 'Song Title');
    formData.append('artist', 'Song Artist');
    formData.append('duration', '240'); // Duration in seconds
    formData.append('album', 'Song Album');
    formData.append('genre', 'Pop');
    formData.append('file', fs.createReadStream('/path/to/song.mp3')); // Ensure 'file' matches the field name in multer setup
    
    axios.post('https://music-player-mel3.onrender.com/v1/admin/song/addsongs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...formData.getHeaders(),
      },
    })
    .then(response => {
      console.log('Song added successfully:', response.data.song);
    })
    .catch(error => {
      console.error('Error adding song:', error.response.data.message);
    });
  return (
    <div>
      admin
    </div>
  )
}

export default page
