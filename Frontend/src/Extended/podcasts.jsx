import React from "react";

export default function PodcastPage() {
  return (
    <div className="bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        YouTube
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/pCvcouD-l5s"
            title="Nepal Adventures Part 5: Jungle Safari & Traditional Dance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 2 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/w2rznyt0TQs"
            title="Second Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 3 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/-5gAq6-KuGQ"
            title="Third Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="flex w-full flex-col pt-8 pb-3">
        <div className="divider">
          <h2 className="text-3xl font-bold text-center mb-1.5 text-black">
            Instagram
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/pCvcouD-l5s"
            title="Nepal Adventures Part 5: Jungle Safari & Traditional Dance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 2 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/w2rznyt0TQs"
            title="Second Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 3 */}
        <div className="bg-base-100 p-4 shadow-md rounded">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/-5gAq6-KuGQ"
            title="Third Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
