class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  countLeafNodes() {
    if (!this.left && !this.right) {
      if (this.value === null) return 0;
      return 1;
    }
    let count = 0;
    if (this.left) {
      count += this.left.countLeafNodes();
    }
    if (this.right) {
      count += this.right.countLeafNodes();
    }
    return count;
  }
  maxDepth() {
    if (!this.left && !this.right) {
      return 0;
    }
    let leftDepth = 0;
    let rightDepth = 0;
    if (this.left) {
      leftDepth = this.left.maxDepth();
    }
    if (this.right) {
      rightDepth = this.right.maxDepth();
    }
    return Math.max(leftDepth, rightDepth) + 1;
  }
  equals(otherNode) {
    if (!otherNode) {
      return false;
    }
    if (this.value !== otherNode.value) {
      return false;
    }
    let leftEquals = false;
    let rightEquals = false;
    if (!this.left && !otherNode.left) {
      leftEquals = true;
    } else if (this.left && otherNode.left) {
      leftEquals = this.left.equals(otherNode.left);
    }
    if (!this.right && !otherNode.right) {
      rightEquals = true;
    } else if (this.right && otherNode.right) {
      rightEquals = this.right.equals(otherNode.right);
    }
    return leftEquals && rightEquals;
  }
}
module.exports = Node;
