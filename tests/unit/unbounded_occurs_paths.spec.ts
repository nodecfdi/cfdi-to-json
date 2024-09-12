import UnboundedOccursPaths from '#src/unbounded_occurs_paths';

describe('unbounded occurs paths', () => {
  test('create using json source with invalid json', () => {
    expect(() => UnboundedOccursPaths.fromJsonSource('')).toThrowError(
      'Unexpected end of JSON input',
    );
  });

  test('create using json not array', () => {
    expect(() => UnboundedOccursPaths.fromJsonSource('""')).toThrowError(
      'JSON does not contains an array of entries',
    );
  });

  test('create using json not array of strings', () => {
    expect(() => UnboundedOccursPaths.fromJsonSource('["string", 2]')).toThrowError(
      'JSON does not contains a string on index 1',
    );
  });
});
