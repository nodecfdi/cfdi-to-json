import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const useTestCase = (): {
  filePath: (append?: string) => string;
  fileContents: (filename: string) => string;
} => {
  const filePath = (append = ''): string =>
    join(dirname(fileURLToPath(import.meta.url)), '_files', append);

  const fileContents = (filename: string): string => readFileSync(filePath(filename), 'utf8');

  return {
    filePath,
    fileContents,
  };
};

export { useTestCase };
