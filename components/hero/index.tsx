import { useTranslation } from "next-i18next";
import LangDropDown from "../lang-dropdown";
import { useState } from "react";
import Image from 'next/image';
import axios from 'axios';
import imaglogo from '../../public/snaptik-logo.png'; // Adjust the path as necessary
export default function HeroContainer() {
  const [url, setUrl] = useState(""); // State for URL input
  const { t } = useTranslation("hero");

  // Function to handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await videoDownloader(url); // Call the downloader with user-provided URL
      
      // Get the download URL from the response
      const downloadUrl = response.data.downloadUrl; 
      if (downloadUrl) {
        downloadVideo(downloadUrl); // Trigger the download
      } else {
        console.error("Download URL not found in the response.");
      }
    } catch (error) {
      console.error("Error downloading video:", error); // Handle error appropriately
    }
  };

  // Function to trigger video download
  const downloadVideo = (url: string) => {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url; // Set the href to the download URL
    a.download = ''; // Optionally set a filename
    document.body.appendChild(a); // Append it to the body
    a.click(); // Programmatically click the anchor to trigger the download
    document.body.removeChild(a); // Remove the anchor from the document
  };

  return (
    <>
      <div className='bg-white h-20'>
        <div className="flex flex-row justify-between h-full items-center">
          {/* <div className='text-black'></div> */}
          <div>
            <Image src={imaglogo} alt="SnapTik Logo" width={150} height={50} />
          </div>
          <div className=''>
            <LangDropDown />
          </div>
        
        </div>
      </div>

      <div className="grid grid-rows-1 gap-4 bg-blue-700 h-[300px] justify-items-center">
        <h1 className="text-white text-3xl justify-items-center flex align-center">
          {t("title").split(" ").map((word, index) => (
            <span className="pt-2.5 inline-block slide-up" key={index}>
              {word}
            </span>
          ))}
        </h1>
        <p className="text-white">{t("description")}</p>
        <form onSubmit={handleSubmit} className="flex flex-row w-screen p-2.5 justify-center">
          <input
            className="mb-[80px] h-10 w-[400px]"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Paste TikTok link here"
          />
          <button
            type="submit"
            className="btn-download mb-[80px] h-10 w-[100px] ml-4 bg-green-800 text-xl"
          >
            <span>Download</span>
          </button>
        </form>
      </div>
    </>
  );
}

// Function to fetch video data
const videoDownloader = async (videoUrl: string) => {
  const options = {
    method: 'GET',
    url: 'https://tiktok-video-downloader-api.p.rapidapi.com/media',
    params: {
      videoUrl, // Use the provided video URL
    },
    headers: {
      'x-rapidapi-key': 'c2b1e14d8dmsh5a0625c627ca0ffp166217jsn9e18e9b84fec',
      'x-rapidapi-host': 'tiktok-video-downloader-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response; // Return the full response to handle the data in the component
  } catch (error) {
    console.error("Error fetching video data:", error);
    throw error; // Propagate the error
  }
};