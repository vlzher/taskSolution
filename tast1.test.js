const Node = require("./task1");
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const copy = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
  Object.keys(copy).forEach((key) => {
    copy[key] = deepCopy(copy[key]);
  });
  return copy;
}
describe("Node", () => {
  let root;

  beforeEach(() => {
    root = new Node(
      5,
      new Node(3, new Node(2), new Node(5)),
      new Node(
        7,
        new Node(1),
        new Node(0, new Node(2), new Node(8, null, new Node(5)))
      )
    );
  });

  describe("countLeafNodes", () => {
    test("counts the number of leaf nodes in a tree", () => {
      expect(root.countLeafNodes()).toEqual(5);
    });
    test("returns 0 for a tree with no nodes", () => {
      const emptyTree = new Node(null, null, null);
      expect(emptyTree.countLeafNodes()).toEqual(0);
    });
    test("returns 1 for a tree with a single node", () => {
      const singleNode = new Node(1, null, null);
      expect(singleNode.countLeafNodes()).toEqual(1);
    });
  });

  describe("maxDepth", () => {
    test("finds the maximum depth of a tree", () => {
      expect(root.maxDepth()).toEqual(4);
    });
    test("returns 0 for a tree with no nodes", () => {
      const emptyTree = new Node(null, null, null);
      expect(emptyTree.maxDepth()).toEqual(0);
    });
    test("returns 0 for a tree with a single node", () => {
      const singleNode = new Node(1, null, null);
      expect(singleNode.maxDepth()).toEqual(0);
    });
  });

  describe("equals", () => {
    test("checks if two trees are equal", () => {
      const rootCopy = deepCopy(root);
      expect(rootCopy.equals(root)).toEqual(true);
    });
    test("checks if two trees are not equal", () => {
      const rootCopy = deepCopy(root);
      rootCopy.left.left.value = 1;
      expect(rootCopy.equals(root)).toEqual(false);
    });
    test("returns false when comparing with null", () => {
      expect(root.equals(null)).toEqual(false);
    });
    test("returns true when comparing with itself", () => {
      expect(root.equals(root)).toEqual(true);
    });
    test("returns false when comparing with a tree with different structure", () => {
      const otherTree = new Node(
        5,
        new Node(3, new Node(2), new Node(5)),
        new Node(
          7,
          new Node(1),
          new Node(0, new Node(2), new Node(8, null, new Node(6)))
        )
      );
      expect(root.equals(otherTree)).toEqual(false);
    });
  });
});
