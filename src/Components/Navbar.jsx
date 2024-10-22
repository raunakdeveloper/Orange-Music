import React from "react";

function Navbar({data}) {

  return (
    <div className="py-3 px-6 md:px-14 w-full flex justify-between items-center">
      {/* Logo or Brand Name */}
      <h1 className="text-xl font-semibold">Orange</h1>

      {/* Favorites Button */}
      <div className="bg-orange-400 px-3 py-1 rounded-md text-white shadow-md flex justify-center items-center">
        <span className="text-xs">Favorites</span>
        <span className="ml-2 bg-white text-orange-400 rounded-full px-2 py-1 text-xs">
          {data.filter(item => item.isAdded).length}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
