import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

function ImageComponent({ id, image, tags, title }) {
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <>
      <div className="img">
        {loading ? <Skeleton className="h" /> : <img src={image} alt="img" />}

        {loading ? <Skeleton /> : <h5>{title}</h5>}
        {loading ? <Skeleton /> : <p>{tags}</p>}
      </div>
    </>
  );
}

export default ImageComponent;
