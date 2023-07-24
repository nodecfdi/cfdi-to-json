import { UnboundedOccursPaths } from 'src/unbounded-occurs-paths';
import { Children } from 'src/nodes/children';
import { Node } from 'src/nodes/node';

describe('children', () => {
    test('is_children_multiple_detect_duplicated_node_names', () => {
        const unboundedOccursPaths = new UnboundedOccursPaths();
        const children = new Children(unboundedOccursPaths);
        const nodeChapter = new Node('chapter', '/', {}, new Children(unboundedOccursPaths));
        children.append(nodeChapter);
        children.append(nodeChapter);

        expect(children.isChildrenMultiple(nodeChapter)).toBeTruthy();
    });
});
