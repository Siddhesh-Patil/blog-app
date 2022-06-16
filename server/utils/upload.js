import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';


dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const storage  = new GridFsStorage({
  url : `mongodb://${username}:${password}@ac-wskghz6-shard-00-00.f4jrits.mongodb.net:27017,ac-wskghz6-shard-00-01.f4jrits.mongodb.net:27017,ac-wskghz6-shard-00-02.f4jrits.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-8sr0bw-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true},
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if(match.indexOf(file.memeType) === -1){
        return `${Date.now()}-blog-${file.originalname}`
    }

    return {
        baucketName :"photos",
        filename: `${Date.now()}-blog-${file.originalname}`
    }
  }
})

export default multer({ storage });