export function makeTree(string, openByDefault) {
  const root = { id: 'ROOT', name: 'ROOT', isExpanded: true };
  let prevNode = root;
  let prevLevel = -1;

  string.split('\n').forEach((line) => {
    const [dept, code] = line.split('/');
    const name = dept.trimStart();

    const level = dept.length - name.length;
    const diff = level - prevLevel;

    const node = { id: code, name, isExpanded: openByDefault };

    if (diff === 1) {
      // First child
      node.parent = prevNode;
      prevNode.children = [node];
    } else {
      // Find the parent and go up
      let parent = prevNode.parent;
      for (let i = diff; i < 0; i++) {
        parent = parent.parent;
      }
      node.parent = parent;
      parent.children.push(node);
    }
    prevNode = node;
    prevLevel = level;
  });

  const arr = [];
  arr.push(root.children[0]);
  return arr;
}
