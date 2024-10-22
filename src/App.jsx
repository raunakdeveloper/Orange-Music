import { useState, useEffect } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import SongData from "./data/SongData";

const App = () => {
  const [data, setData] = useState(SongData);

  // Handle the toggle favorite event
  const handleClick = (songIndex) => {
    setData((prevData) =>
      prevData.map((song, index) =>
        index === songIndex ? { ...song, isAdded: !song.isAdded } : song
      )
    );
  };

  return (
    <div className="max-w-screen-2xl overflow-x-hidden overflow-y-auto mx-auto w-full h-screen bg-zinc-300">
      <Navbar data={data} />
      <div className="px-8 mx-auto mt-10 flex flex-wrap justify-center items-center gap-10">
        {data.map((item, index) => (
          <Card
            key={index}
            data={item}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
