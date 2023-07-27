import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', 
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 16);
      cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
    },
  }),
};


export const fileFilter = (req, file, cb) => {
    const allowedExtensions = /\.(jpg|png|jpeg|gif)$/i;
  if (!allowedExtensions.test(file.originalname)) {
    return cb(new Error('Invalid format type filterImage'), false);
  }
    cb(null, true)
}

