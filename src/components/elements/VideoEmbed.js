import React, { useState } from "react";
import PropTypes from "prop-types";

const getYouTubeId = (url) => {
  const match = url.match(/embed\/([^?&/]+)/);
  return match ? match[1] : null;
};

const withAutoplay = (url) => `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;

const VideoEmbed = ({ embedId, className, posterSrc }) => {
  const videoId = getYouTubeId(embedId);
  const [isPlaying, setIsPlaying] = useState(!videoId);
  const [thumbSrc, setThumbSrc] = useState(
    posterSrc ||
      (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null)
  );

  const wrapperClass = `video-responsive${className ? ` ${className}` : ""}`;

  if (!isPlaying) {
    return (
      <div className={wrapperClass}>
        <button
          type="button"
          className="video-facade"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
        >
          <img
            src={thumbSrc}
            alt=""
            className="video-facade-thumb"
            onError={() => {
              if (!posterSrc) {
                setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
              }
            }}
          />
          <span className="video-facade-play" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <iframe
        width="528"
        height="396"
        src={videoId ? withAutoplay(embedId) : embedId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
      />
    </div>
  );
};

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  className: PropTypes.string,
  posterSrc: PropTypes.string,
};

export default VideoEmbed;
