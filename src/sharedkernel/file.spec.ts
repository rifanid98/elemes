import * as path from 'path';
import { File } from 'sharedkernel/file';

type FileData = {
  name: string;
};

describe('File', () => {
  const fileService = new File();

  describe('read', () => {
    it('should returns from sheet file', async () => {
      const fileUri = path.join(__dirname, '../../public/file.xlsx');
      const data = await fileService.read<FileData>(fileUri);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThanOrEqual(1);
      data.forEach((data) => {
        expect(data).toHaveProperty('name');
      });
    });
  });

  describe('exists', () => {
    it('should found the file successfully', async () => {
      const fileUri = path.join(__dirname, '../../public/file.xlsx');
      const isExists = await fileService.exist(fileUri);
      expect(isExists).toBe(true);
    });

    it('should not found the file', async () => {
      const fileUri = path.join(__dirname, '../../public/file.xlsxs');
      const isExists = await fileService.exist(fileUri);
      expect(isExists).toBe(false);
    });
  });

  describe('create', () => {
    it('should created a file', async () => {
      const data = 'this is a data';
      const written = await fileService.create(data, 'test.txt');
      expect(written).toBe(true);
    });
  });

  describe('delete', () => {
    it('should delete a file', async () => {
      const fileUri = path.join(__dirname, '../../public/test.txt');
      const deleted = await fileService.delete(fileUri);
      expect(deleted).toBe(true);
    });
  });
});
