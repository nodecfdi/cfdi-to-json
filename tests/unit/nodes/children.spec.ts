import Children from '#src/nodes/children';
import Node from '#src/nodes/node';
import UnboundedOccursPaths from '#src/unbounded_occurs_paths';

describe('children', () => {
  test('is children multiple detect duplicated node names', () => {
    const unboundedOccursPaths = new UnboundedOccursPaths();
    const children = new Children(unboundedOccursPaths);
    const nodeChapter = new Node('chapter', '/', {}, new Children(unboundedOccursPaths));
    children.append(nodeChapter);
    children.append(nodeChapter);

    expect(children.isChildrenMultiple(nodeChapter)).toBeTruthy();
  });
});
