import { ConfigOptions, v2 as Cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (): ConfigOptions => {
    // TODO: put cloudinary stuff in .env
    return Cloudinary.config({
      cloud_name: 'your_cloud_name',
      api_key: 'your_api_key',
      api_secret: 'your_api_secret',
    });
  },
};
