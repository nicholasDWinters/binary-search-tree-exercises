class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (current !== null) {

      if (current.val < val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }

      } else if (current.val > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    } else if (current.val < val && current.right === null) {
      current.right = new Node(val);
      return this;
    } else if (current.val < val) {
      return this.insertRecursively(val, current.right)
    } else if (current.val > val && current.left === null) {
      current.left = new Node(val);
      return this;
    } else {
      return this.insertRecursively(val, current.left);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {

    if (val === current.val) {
      return current;
    } else if (val > current.val) {
      if (current.right !== null) {
        return this.findRecursively(val, current.right);
      } else {
        return undefined;
      }
    } else if (val < current.val) {
      if (current.left !== null) {

        return this.findRecursively(val, current.left);
      } else {
        return undefined;
      }
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arr = []) {

    arr.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, arr);
    if (node.right) this.dfsPreOrder(node.right, arr);
    return arr;


  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arr = []) {
    if (node.left) this.dfsInOrder(node.left, arr);
    arr.push(node.val);
    if (node.right) this.dfsInOrder(node.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arr = []) {
    if (node.left) this.dfsPostOrder(node.left, arr);
    if (node.right) this.dfsPostOrder(node.right, arr);
    arr.push(node.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root, queue = [], arr = []) {
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
