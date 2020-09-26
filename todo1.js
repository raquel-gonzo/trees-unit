class BST {
  constructor() {
    this.root = None;
  }
  add(val) {
    // create a new node
    var new_node = new Node(val);
    // set up a runner
    var runner = this.root;
    while (runner) {
      if (val > this.root.val) {
        // go to the right
      } else {
        // got to left
      }
    }
  }

  // BST Contains
  contains(val) {
    // passing a val to look thru the tree. compares each node.
    if (this.root.value == val) {
      return true;
    }
    var monkey = this.root;
    while (monkey) {
      if (val > monkey.value) {
        if (monkey.right == val) {
          return true;
        } else {
          monkey = monkey.right;
        }
      }
    }
  }

  min() {
    // the left-most leaf may be the smallest value.
    var monkey = this.root;
    while (monkey.left) {
      monkey = monkey.left; // continue moving left until you return
    }
    return monkey.value;
  }

  max() {
    var monkey = this.root;
    while (monkey.right) {
      monkey = monkey.right;
    }
    return monkey.value;
  }

  //BST: size
  size(count, node = this.root) {
    if (node) {
      count++;
      if (node.left) {
        count_one += this.size(count, node.left);
      }
      if (node.right) {
        count_two += this.size(count, node.right);
      }
    }
    return count;
  }
}
