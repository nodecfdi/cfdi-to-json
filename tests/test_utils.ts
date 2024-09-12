import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Get filename for a given file path URL
 */
const getFilename = (url: string | URL): string => {
  return fileURLToPath(url);
};

/**
 * Get dirname for a given file path URL
 */
const getDirname = (url: string | URL): string => {
  return path.dirname(getFilename(url));
};

export const filePath = (append = ''): string =>
  path.join(getDirname(import.meta.url), '_files', append);

export const fileContent = (file: string): string => {
  if (!existsSync(file)) {
    return '';
  }

  return readFileSync(file).toString();
};

export const fileContents = (append: string): string => fileContent(filePath(append));
