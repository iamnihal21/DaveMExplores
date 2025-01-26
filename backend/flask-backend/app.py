from flask import Flask, request, send_file, jsonify
import os
import yt_dlp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DOWNLOAD_DIRECTORY = "E:/OtherProjects/Explorers"

@app.route("/download", methods=["POST"])  # Explicitly allow POST
def download_video():
    data = request.json  # Ensure you're extracting JSON from the request
    video_url = data.get("url")  # Get the video URL from the POST body

    if not video_url:
        return jsonify({"error": "No video URL provided"}), 400

    try:
        # Download video logic
        ydl_opts = {
            "outtmpl": os.path.join(DOWNLOAD_DIRECTORY, "%(title)s.%(ext)s"),
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=True)
            file_name = ydl.prepare_filename(info)

        # Return the file path as a response
        return jsonify({"message": "Video downloaded successfully", "file_name": file_name})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
