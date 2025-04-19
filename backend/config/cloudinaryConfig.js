import {v2 as cloudinary} from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import dotenv from 'dotenv'
dotenv.config();
import multer from "multer";

const cloudinaryConf=async ()=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET,
        timeout: 60000,
});
}

//with the help of multer-cloudinary-storage give the location to save the file
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Forever',
    format: async (req, file) => 'png',
  },
});

const uploads=multer(
  {
    storage:storage,
    limits: { 
      fileSize: 5 * 1024 * 1024,
      files: 4 
    }
  });
export {cloudinaryConf,uploads};
