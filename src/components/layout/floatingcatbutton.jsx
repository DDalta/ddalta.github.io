import { useState } from "react";

import catImage from "../../assets/images/cats.JPEG"

const FloatingCatButton = () => {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        if (showImage) return;
        setShowImage(true);
        setTimeout(() => {
            setShowImage(false);
        }, 4000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <div className={`mb-3 transition-opacity duration-500 ease-in-out pointer-events-none ${showImage ? 'opacity-100' : 'opacity-0'}`}>
                <img
                src={catImage}
                alt="my cats"
                className="w-50 h-50 rounded-lg shadow-lg  bg-white dark:bg-gray-950 object-cover"
                />
            </div>
            <button onClick={handleClick} className="pointer-events-auto hover:-translate-y-1 active:scale-95 transition-transform">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                width="64"
                height="64"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                >
                    <path fill="#4b5661" d="M19.5 22H14a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h5.5a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5"></path>
                    <path fill="#4b5661" d="M11 10h6v12H8a4 4 0 0 1-4-4v-1a7 7 0 0 1 7-7"></path>
                    <path fill="#fff" d="M12 22a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1M16 22a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1M14 14a3 3 0 0 1-3-3V9h6v2a3 3 0 0 1-3 3"></path>
                    <path fill="#ff888b" d="m13 4-3 2V2.207a.5.5 0 0 1 .854-.353ZM15 4l3 2V2.207a.5.5 0 0 0-.854-.353Z"></path>
                    <path fill="#4b5661" d="M14 11a4 4 0 0 1-4-4V4h8v3a4 4 0 0 1-4 4"></path>
                    <circle cx="12.25" cy="6.75" r="0.75" fill="#fff"></circle>
                    <circle cx="16" cy="6.75" r="0.75" fill="#fff"></circle>
                </svg>
            </button>
            
        </div>
    )
};

export default FloatingCatButton;