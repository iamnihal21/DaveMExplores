import { useState } from 'react';

const VideoDownloader = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (!url) {
            alert('Please enter a valid YouTube URL');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/download?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error('Failed to download');
            }

            // Blob to download the file
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'video.mp4';
            link.click();
        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Download YouTube Video</h2>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter YouTube URL"
                className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button
                onClick={handleDownload}
                className="w-full bg-blue-500 text-white py-2 rounded-md"
                disabled={loading}
            >
                {loading ? 'Downloading...' : 'Download Video'}
            </button>
        </div>
    );
};

export default VideoDownloader;
