import React from "react";

const SwingLoader = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      role="progressbar"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex space-x-2 animate-swing">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${getGradient(i)}`}
          ></div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4 animate-shadow">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-1 rounded-full bg-gray-300 opacity-50`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const getGradient = (index) => {
  const gradients = [
    "bg-gradient-to-r from-[#385c78] to-[#325774]",
    "bg-gradient-to-r from-[#325774] to-[#47536a]",
    "bg-gradient-to-r from-[#4a5369] to-[#6b4d59]",
    "bg-gradient-to-r from-[#744c55] to-[#954646]",
    "bg-gradient-to-r from-[#9c4543] to-[#bb4034]",
    "bg-gradient-to-r from-[#c33f31] to-[#d83b27]",
    "bg-gradient-to-r from-[#da3b26] to-[#db412c]",
  ];
  return gradients[index];
};

export default SwingLoader;
