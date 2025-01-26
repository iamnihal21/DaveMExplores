import React, { useState } from "react";
import { motion } from "framer-motion";

const WallpaperTool = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const generateWallpaper = async () => {
    try {
      setError("");
      setImage(null);

      const response = await fetch("http://localhost:5000/api/generate-wallpaper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate wallpaper");
      }

      const data = await response.blob();
      const imageURL = URL.createObjectURL(data);
      setImage(imageURL);
    } catch (err) {
      console.log(err);
      
      setError(err.message);
    }
  };

  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Generate Your Wallpaper
      </motion.h1>

      <motion.input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Enter a prompt for the wallpaper"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.button
        className="btn btn-primary"
        onClick={generateWallpaper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Generate
      </motion.button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {image && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-lg font-bold mb-2">Generated Wallpaper:</h2>
          <motion.img
            src={image}
            alt="Generated Wallpaper"
            className="w-full rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default WallpaperTool;
