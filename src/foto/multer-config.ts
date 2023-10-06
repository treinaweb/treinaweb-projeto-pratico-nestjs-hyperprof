import { S3Client } from '@aws-sdk/client-s3';
import { BadRequestException } from '@nestjs/common';
import * as multerS3 from 'multer-s3';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const s3Config = new S3Client({
  region: 'sa-east-1',
  credentials: {
    accessKeyId: 'AKIAXTVE2Q4BYZK7V2MV',
    secretAccessKey: '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',
  },
});

export const multerconfig = {
  storage: multerS3({
    s3: s3Config,
    bucket: 'hyperprof',
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
