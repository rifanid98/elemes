import { Module } from '@nestjs/common';
import { CloudinaryProvider } from 'di/provider/cloudinary.provider';
import { CloudinaryService } from 'di/services';

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}
