import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
 
function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [downloading, setDownloading] = useState(false); // Track download state

  const handleDownload = async () => {
    if (!url.trim()) {
      setStatus("Please enter a valid URL.");
      return;
    }

    setDownloading(true);
    setStatus("Downloading...");

    try {
      const response = await fetch("http://127.0.0.1:5000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "video.mp4";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setStatus("Video downloaded successfully!");
      } else {
        setStatus("Failed to download the video. Please try again.");
      }
    } catch (error) {
      console.error("Error downloading video:", error);
      setStatus("An error occurred. Please check the URL or try again later.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-base-300 p-4">
      <motion.div
        className="bg-base-100 shadow-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl font-bold text-center mb-4 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Video Downloader
        </motion.h1>

        <div className="form-control w-full">
          <motion.input
            type="text"
            placeholder="Enter video URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input input-bordered w-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.button
            onClick={handleDownload}
            className={`btn w-full ${downloading ? "btn-success" : "btn-primary"}`}
            disabled={downloading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {downloading ? (
              <span className="text-green-500">Downloading...</span>
            ) : (
              "Download Video"
            )}
          </motion.button>
        </div>

        {status && !downloading && ( // Hide status message while downloading
          <motion.p
            className={`text-center mt-4 ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default VideoDownloader;
