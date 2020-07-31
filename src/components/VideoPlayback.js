import React, {useEffect, useRef} from "react";

const h = window.innerHeight;
const w = window.innerWidth;
const VideoPlayback = ({blob}) => {
    const videoRef = useRef(null);
    const url = blob ? URL.createObjectURL(blob) : "";
    const fullScreen = (event) => {
        if (event.keyCode === 70) {
            videoRef.current.requestFullscreen();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", fullScreen);
        return () => {
            document.removeEventListener("keydown", fullScreen);
        };
    }, []);

    return (
        <video
            ref={videoRef}
            width={w}
            height={h}
            src={url}
            controls
        />
    );
};

export default VideoPlayback;
