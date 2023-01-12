import React, { useState } from 'react';

function FlipButton() {
  const [flip, setFlip] = useState(false);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => setFlip(!flip)}
    >
      Flip Horizontally
    </button>
  );
}

function ImageFlipper() {
  const [flip, setFlip] = useState(false);

  return (
    <div>
      <FlipButton setFlip={setFlip} />
      <img
        src="path/to/image.jpg"
        className={`${flip ? '-rotate-180' : ''}`}
        alt="My Image"
      />
    </div>
  );
}

export default ImageFlipper;
