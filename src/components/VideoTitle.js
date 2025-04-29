import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12 absolute">
      <h1 className="text-5xl font-extrabold text-white">{title}</h1>
      <p className="my-4 w-2/5 text-white">{overview}</p>
      <div>
        <button className="py-2 my-2 bg-white text-black px-8 rounded-lg text-lg shadow hover:bg-slate-600">
          ▶️ Play
        </button>
        <button className="py-2 mx-4 bg-gray-400 px-8 rounded-lg text-lg shadow  hover:bg-slate-600">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
