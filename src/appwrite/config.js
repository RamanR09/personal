import { Client, Storage } from "appwrite";
import conf from "../conf/conf";

const client = new Client();
client
  .setEndpoint(conf.appwriteUrl) // Your Appwrite endpoint
  .setProject(conf.appwriteProjectId); // Your project ID

const storage = new Storage(client);

export { storage, client };
