import { readFileSync } from 'fs';
import { join } from 'path';

export class TestCase {
    public static filePath(filename: string): string {
        return join(__dirname, '_files', filename);
    }

    public static fileContents(filename: string): string {
        return readFileSync(TestCase.filePath(filename), 'utf-8');
    }
}
