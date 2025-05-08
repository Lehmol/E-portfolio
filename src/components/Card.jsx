import React from "react";

function Card({ image, description, liveLink, codeLink }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm p-4 space-y-4 text-left">
      <img
        src={image}
        alt="Project screenshot"
        className="w-full h-48 object-cover"
      />
      <p className="text-center tracking-wide">{description}</p>
      <div className="flex justify-between">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default Card;
