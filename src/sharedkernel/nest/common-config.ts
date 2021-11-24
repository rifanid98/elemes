import { diskStorage, Options } from 'multer';
import { editFileName, sheetFileFilter } from 'sharedkernel/util';

export const multerOptions: Options = {
  storage: diskStorage({
    destination: './upload',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filename: editFileName,
  }),
  fileFilter: sheetFileFilter,
};
