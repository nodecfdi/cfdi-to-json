import defaultPaths from '#src/source/default_paths';

export default class UnboundedOccursPaths {
  private readonly _paths: Map<string, number | string>;

  public static fromJsonSource(contents: string): UnboundedOccursPaths {
    const sourcePaths: string[] = JSON.parse(contents) as string[];

    if (!Array.isArray(sourcePaths)) {
      throw new TypeError(`JSON does not contains an array of entries`);
    }

    for (const [index, sourcePath] of sourcePaths.entries()) {
      if (typeof sourcePath !== 'string') {
        throw new TypeError(`JSON does not contains a string on index ${index}`);
      }
    }

    return new UnboundedOccursPaths(...sourcePaths);
  }

  public static defaultSource(): UnboundedOccursPaths {
    return new UnboundedOccursPaths(...defaultPaths);
  }

  public constructor(...paths: string[]) {
    this._paths = new Map<string, number>();

    for (const [key, value] of paths.entries()) {
      this._paths.set(value, key);
    }
  }

  public match(path: string): boolean {
    return this._paths.has(path);
  }
}
