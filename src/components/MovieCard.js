import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mx-1">
      <img src={IMG_CDN + posterPath} alt="Card"></img>
    </div>
  );
};

export default MovieCard;
