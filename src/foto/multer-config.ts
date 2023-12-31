import { S3Client } from '@aws-sdk/client-s3';
import { BadRequestException } from '@nestjs/common';
import * as multerS3 from 'multer-s3';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';

config({ path: '.env' });
const s3Config = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

export const multerconfig = {
  storage: multerS3({
    s3: s3Config,
    bucket: process.env.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      const fileName = path
        .parse(file.originalname)
        .name.replace(/\s/g, '-' + uuidv4());

      const extension = path.parse(file.originalname).ext;
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, `${fileName}${extension}`);
      } else {
        const error = new BadRequestException();
        cb(error);
      }
    },
  }),
};
