module.exports.recursion = function recursion(tree) {
  if (typeof tree !== "object" || Array.isArray(tree)) {
    throw new Error("Invalid value");
  }
  const arr = [];

  function checkNode(node, i) {
    if (node) {
      if (!arr[i]) {
        arr[i] = [];
      }

      arr[i].push(node.value);
      const j = i + 1;
      checkNode(node.left, j);
      checkNode(node.right, j);
    }
  }

  checkNode(tree, 0);

  return arr;
};
