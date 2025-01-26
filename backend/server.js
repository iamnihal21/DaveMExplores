// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const connectDB = require('./server/connection'); // MongoDB connection setup
// const userRoutes = require('./routes/userRoutes'); // User routes

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON in request bodies

// // Connect to MongoDB
// connectDB();

// // Constants for external services
// const FLASK_SERVER_URL = 'http://127.0.0.1:5001'; // Flask backend URL for video downloading
// const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

// if (!HUGGINGFACE_API_KEY) {
//   console.error('Error: HUGGINGFACE_API_KEY is not set.');
//   process.exit(1);
// }

// // Register user routes
// app.use('/api/users', userRoutes); // Base path for user-related routes

// // Video downloader route (proxy to Flask backend)
// app.get('/api/download', async (req, res) => {
//   const videoUrl = req.query.url;

//   if (!videoUrl) {
//     return res.status(400).json({ error: 'Please provide a valid video URL.' });
//   }

//   try {
//     // Make a request to the Flask backend
//     const response = await axios({
//       url: `${FLASK_SERVER_URL}/download`,
//       method: 'GET',
//       params: { url: videoUrl },
//       responseType: 'stream', // Get the file as a stream
//     });

//     const videoTitle =
//       response.headers['content-disposition']
//         ?.split('filename=')[1]
//         ?.replace(/"/g, '') || 'video.mp4';

//     // Set response headers
//     res.setHeader('Content-Type', 'video/mp4');
//     res.setHeader('Content-Disposition', `attachment; filename="${videoTitle}"`);

//     // Pipe the video stream directly to the client
//     response.data.pipe(res);
//   } catch (error) {
//     console.error('Error downloading video:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to download video. Please try again later.' });
//   }
// });

// // Wallpaper generation route
// app.post('/api/generate-wallpaper', async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: 'Please provide a prompt for the wallpaper.' });
//   }

//   try {
//     console.log("Using Hugging Face API Key:", process.env.HUGGINGFACE_API_KEY);

//     const response = await axios.post(
//       'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
//       { inputs: prompt },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const image = response.data; // Base64 image or error
//     if (image.error) {
//       return res.status(500).json({ error: image.error });
//     }

//     res.json({ image });
//   } catch (error) {
//     console.error('Error generating wallpaper:', error.response?.data || error.message);
//     res.status(500).json({
//       error: error.response?.data?.error || 'Failed to generate wallpaper. Please try again later.',
//     });
//   }
// });

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the API that connects to MongoDB and Hugging Face!');
// });

// // Start the server
// const PORT = process.env.PORT || 5000; // Default to port 5000 if not set in environment variables
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const connectDB = require('./server/connection');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Constants
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
if (!HUGGINGFACE_API_KEY) {
  console.error('Error: HUGGINGFACE_API_KEY is not set.');
  process.exit(1);
}

// Wallpaper generation route
app.post('/api/generate-wallpaper', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Please provide a prompt for the wallpaper.' });
  }

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer'
      },
    );

    if (response.data.error) {
      return res.status(500).json({ error: response.data.error });
    }

    await fs.writeFileSync('./images/image.png', response.data);

    res.sendFile('./images/image.png', { root: __dirname });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate wallpaper. Please try again.' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Wallpaper API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
