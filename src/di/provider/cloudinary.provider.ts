import { ConfigOptions, v2 as Cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (): ConfigOptions => {
    // TODO: put cloudinary stuff in .env
    return Cloudinary.config({
      cloud_name: 'adnin-rifandi-sutanto-putra',
      api_key: '242465336691126',
      api_secret: '0gRN8VAzMt7A83Y40tEUakbwhG4',
    });
  },
};
