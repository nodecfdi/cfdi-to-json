import { UnboundedOccursPaths } from '~/unbounded-occurs-paths';
import { Children } from '~/nodes/children';
import { Node } from '~/nodes/node';

describe('Children', () => {
    test('is children multiple detect duplicated node names', () => {
        const unboundedOccursPaths = new UnboundedOccursPaths();
        const children = new Children(unboundedOccursPaths);
        const nodeChapter = new Node('chapter', '/', {}, new Children(unboundedOccursPaths));
        children.append(nodeChapter);
        children.append(nodeChapter);

        expect(children.isChildrenMultiple(nodeChapter)).toBeTruthy();
    });
});
