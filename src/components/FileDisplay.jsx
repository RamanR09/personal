// src/components/FileDisplay.js
import React, { useState, useEffect } from "react";
import { getFileURL } from "../appwrite/fileService";

const ImageDisplay = ({ bucketId, fileId }) => {
  const [fileURL, setFileURL] = useState(null);

  useEffect(() => {
    const fetchFileURL = async () => {
      const url = await getFileURL(bucketId, fileId);
      setFileURL(url);
    };

    fetchFileURL();
  }, [bucketId, fileId]);

  if (!fileURL) {
    return <div>Loading...</div>;
  }

  return (
    <img
      className=" w-full rounded-2xl relative ease-in-out duration-300 delay-500  animate-fadeIn "
      src={fileURL}
      alt="Uploaded File"
    />
  );
};

export default ImageDisplay;
