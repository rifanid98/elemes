import { Injectable } from '@nestjs/common';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as Cloudinary,
} from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      Cloudinary.uploader.upload(
        file.destination + '/' + file.filename,
        function (error, result) {
          if (error) {
            reject(error);
          }

          resolve(result);
        },
      );
    });
  }
}
