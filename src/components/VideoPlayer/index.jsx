import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import PropTypes from "prop-types";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const [isDOMReady, setIsDOMReady] = useState(false); // Đảm bảo DOM đã sẵn sàng

    useEffect(() => {
        setIsDOMReady(true); // Xác nhận DOM đã render
    }, []);

    useEffect(() => {
        if (!isDOMReady || !videoRef.current) return; // Đợi DOM sẵn sàng trước khi chạy

        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: true,
                preload: "auto",
                responsive: true,
                fluid: true,
                html5: {
                    hls: {
                        overrideNative: true,  // Sử dụng HLS của Video.js thay vì trình duyệt
                        enableLowInitialPlaylist: true, // Load nhanh playlist ban đầu
                        fastQualityChange: true,  // Chuyển đổi chất lượng nhanh hơn
                    }
                }
            });

            playerRef.current.src({
                src: src,
                type: "application/x-mpegURL",
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [isDOMReady]);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.src({
                src: src,
                type: "application/x-mpegURL",
            });
        }
    }, [src]);

    return (
        <div data-vjs-player>
            {isDOMReady && <video ref={videoRef} autoPlay className="video-js vjs-default-skin" />}
        </div>
    );
};

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired
}

export default VideoPlayer;
