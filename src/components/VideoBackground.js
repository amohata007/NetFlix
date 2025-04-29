import { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const [trailerId, setTrailerId] = useState(null);
  const fetchVideo = async () => {
    const trailer = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_Options
    );
    const json = await trailer.json();
    const filterData = json?.results?.filter((data) => data.type === "Trailer");
    const trailer_key = filterData[0]?.key;
    setTrailerId(trailer_key);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-full h-[96vh]"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
