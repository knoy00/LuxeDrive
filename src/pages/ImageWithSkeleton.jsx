import { useState } from "react";
import '../styles/pages/ImageWithSkeleton.css';

const ImageWithSkeleton = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ width: "200px", height: "200px", position: "relative" }}>
      {/* Skeleton with shimmer effect */}
      {loaded && (
        <div className="skeleton-loader">
          <div className="shimmer" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src="/public/images/AMG_black.jpg"
        alt="Car"
        onLoad={() => setLoaded(false)}
        style={{
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;

