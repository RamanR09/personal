import React, { useState, useEffect } from "react";
import { getFileURL } from "../appwrite/fileService";

const VideoDisplay = ({ bucketId, fileId }) => {
  const [fileURL, setFileURL] = useState(null);

  useEffect(() => {
    const fetchFileURL = async () => {
      const url = await getFileURL(bucketId, fileId);
      setFileURL(url);
    };

    fetchFileURL();
  }, [bucketId, fileId]);
  console.log(fileURL);

  if (!fileURL) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video
        className=" flex top-0 left-0 w-full h-full object-cover rounded-xl overflow-hidden  "
        autoPlay
        loop
        muted
        src={fileURL}
      ></video>
    </div>
  );
};

export default VideoDisplay;
