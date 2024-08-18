// src/services/fileService.js
import { storage } from "./config";

const getFileURL = async (bucketId, fileId) => {
  try {
    const response = await storage.getFileView(bucketId, fileId);
    return response.href;
  } catch (error) {
    console.error("Error fetching file URL:", error);
    return null;
  }
};

export { getFileURL };
