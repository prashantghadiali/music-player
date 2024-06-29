const Song = require('../model/Song');

const addSong = async (req, res) => {
  const { title, artist, duration, album, genre } = req.body;
  const file = req.file; // Access uploaded file through req.file

  try {
    console.log("file :", file);
    const newSong = new Song({ title, artist, duration, album, genre });

    // Check if file was uploaded
    if (file) {
      newSong.fileUrl = '/songs/' + file.filename; // Save file URL in database
    }

    await newSong.save();
    res.status(201).json({ message: 'Song added successfully', song: newSong });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding song' });
  }
};

module.exports = {
  addSong,
};
