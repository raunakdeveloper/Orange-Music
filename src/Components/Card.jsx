import React from "react";

const Card = ({ data, index, handleClick }) => {
  const { image, songName, artist, isAdded } = data;
  return (
    <div className="w-32 md:w-56 py-4 pb-4 md:py-4 md:pb-6 bg-white rounded-md flex-shrink-0 flex justify-center items-center relative">
      <div className="flex flex-col items-center">
        <div className="md:w-20 md:h-20 w-14 h-14 bg-orange-500 rounded-md overflow-hidden">
          <img src={image} alt={songName} className="w-full h-full object-cover" />
        </div>
        <div className="text-center mt-1 md:mt-2">
          <p className="md:text-xl text-sm font-medium text-gray-700 line-clamp-2">{songName}</p>
          <p className="md:text-md text-[10px] md:text-sm text-gray-500 line-clamp-1">{artist}</p>
        </div>
      </div>
      <button
        className={`md:px-4 md:py-1 px-2 py-1 whitespace-nowrap ${
          isAdded ? "bg-green-500" : "bg-orange-500"
        } rounded-full text-[8px] md:text-xs text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]`}
        onClick={() => handleClick(index)}
      >
        {isAdded ? "Added" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default Card;
