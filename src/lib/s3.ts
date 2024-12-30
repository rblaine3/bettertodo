import { S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { v4 as uuidv4 } from 'uuid';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const generateUploadUrl = async (fileName: string, fileType: string) => {
  const key = `${uuidv4()}-${fileName}`;

  const { url, fields } = await createPresignedPost(s3Client, {
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: key,
    Conditions: [
      ['content-length-range', 0, 10485760], // up to 10MB
      ['starts-with', '$Content-Type', fileType],
    ],
    Expires: 600, // 10 minutes
  });

  return {
    url,
    fields,
    key,
  };
};

export const getFileUrl = (key: string) => {
  return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
};
