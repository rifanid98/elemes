import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import { Buffer } from 'buffer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FileInterface {
  read<T>(fileUri: string): Promise<T[]>;
  exist(fileUri: string): Promise<boolean>;
  create(data: any, fileName: string): Promise<boolean>;
  delete(fileUri: string): Promise<boolean>;
}

@Injectable()
export class File implements FileInterface {
  /**
   * Read data from spreadsheet file
   * @param fileUri
   */
  read<T>(fileUri: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(fileUri);
      const buffers = [];
      stream.on('data', (data) => {
        buffers.push(data);
      });
      stream.on('end', () => {
        const buffer = Buffer.concat(buffers);
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        const data = [];

        for (let i = 0; i < workbook.SheetNames.length; i++) {
          const temp = XLSX.utils.sheet_to_json(
            workbook.Sheets[workbook.SheetNames[i]],
            { raw: false },
          );

          temp.forEach((res) => {
            data.push(res);
          });
        }

        resolve(data);
      });
      stream.on('error', (e) => {
        console.log(e);
        if (e?.message.toLowerCase().includes('eisdir')) {
          reject(
            new InternalServerErrorException(
              `${e.message}. Maybe the file URI you provided is a folder, not a file`,
            ),
          );
        } else {
          reject(new InternalServerErrorException(e?.message));
        }
      });
    });
  }

  /**
   * Check if file is exists
   * @param fileUri
   */
  exist(fileUri: string): Promise<boolean> {
    const isExist = fs.existsSync(fileUri);
    return Promise.resolve(isExist);
  }

  /**
   * Create file
   * @param data
   * @param fileName
   */
  async create(data: any, fileName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const baseUri = path.join(__dirname, '../../public');
      const fileUri = `${baseUri}/${fileName}`;

      const stream = fs.createWriteStream(fileUri);

      stream.write('This si some chunk data', async (error) => {
        if (error) reject(error);
        const isExists = await this.exist(fileUri);
        isExists && resolve(true);
        resolve(false);
      });
    });
  }

  /**
   * Delete file
   * @param fileUri
   */
  delete(fileUri: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fs.unlink(fileUri, (error) => {
        if (error) reject(error);
        resolve(true);
      });
    });
  }
}
