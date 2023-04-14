# task1.js

This is a Node.js module that defines a Node class. The class has the following methods:

- `countLeafNodes()`: returns the number of leaf nodes in the tree.
- `maxDepth()`: returns the maximum depth of the tree.
- `equals(otherNode)`: checks if the tree rooted at this node is equal to the tree rooted at `otherNode`.

## Installation

To use this module, you should have Node.js installed. You can then install the modules using `npm`:

```bash
npm install
```
## Usage
```
const Node = require('./zad1');

// create a tree
const root = new Node(
  5,
  new Node(3, new Node(2), new Node(5)),
  new Node(
    7,
    new Node(1),
    new Node(0, new Node(2), new Node(8, null, new Node(5)))
  )
);

// get the number of leaf nodes
const leafCount = root.countLeafNodes();
console.log(leafCount);

// get the maximum depth
const maxDepth = root.maxDepth();
console.log(maxDepth);

// check if two trees are equal
const otherRoot = new Node(
  5,
  new Node(3, new Node(2), new Node(5)),
  new Node(
    7,
    new Node(1),
    new Node(0, new Node(2), new Node(8, null, new Node(5)))
  )
);
const isEqual = root.equals(otherRoot);
console.log(isEqual);
```

## Tests
This module comes with tests written using Jest. You can run the tests using the following command:

```bash
npm test