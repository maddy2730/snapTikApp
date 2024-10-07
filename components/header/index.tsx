// eslint-disable-next-line react/no-unescaped-entities
import React, { useState } from "react";

// Data for sculpture description
const sculptureList = [
  {
    description:
      "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
  },
];

function Index() {
  const [showMore, setShowMore] = useState(false);
  const [index, setIndex] = useState(0);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <div className="grid grid-cols-1 gap-10 mt-[200px] ml-[40px]">
        {/* Section 1 */}
        <div className="flex flex-col">
          <div className="text-black font-bold text-xl">Download SnapTik App</div>
          <div>
            I now provide an app for downloading TikTok videos. It is fast, easy, with no watermark and HD quality.
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col">
          <div className="text-black font-bold text-xl">Download TikTok videos (Musically) Without Watermark for FREE</div>
          <div>
            SnapTik.App is one of the best TikTok Downloaders available online to download TikTok videos without a watermark. You dont need to install any software—just a TikTok video link, and you are good to go.
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col">
          <div className="text-black font-bold text-xl">Key Features:</div>
          <ul>
            <li>No watermark for better quality, which most other tools  provide.</li>
            <li>Download TikTok videos on any device: mobile, PC, or tablet.</li>
            <li>No need to download or install any software. Just use your browser.</li>
            <li>SnapTik allows downloading TikTok slideshows as MP4 videos, merging images and music seamlessly.</li>
          </ul>
        </div>
      </div>

      {/* Sculpture Description Section */}
      <div className="grid grid-cols-1 gap-10 mt-[80px]">
        <button className="border border-red-600 p-2" onClick={handleMoreClick}>
          {showMore ? "Hide details" : "HOW TO DOWNLOAD VIDEO TIKTOK WITH NO WATERMARK details"}
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}

export default Index;