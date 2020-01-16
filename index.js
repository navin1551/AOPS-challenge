class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function solvePathToProduct(currNode, product, productSoFar) {
  productSoFar *= currNode.data;

  // productSoFar already too large
  if (productSoFar > product) {
    return null;
  }

  // product not found and no children left
  if (productSoFar !== product && !currNode.left && !currNode.right) {
    return null;
  }

  // SUCCESS - found product and no children left
  if (productSoFar === product && !currNode.left && !currNode.right) {
    return "*";
  }

  // if left child exists
  if (currNode.left !== null) {
    foundProduct = solvePathToProduct(currNode.left, product, productSoFar);
    if (foundProduct) {
      let path = "L" + foundProduct;
      return path;
    }
  }

  // if right child exists
  if (currNode.right !== null) {
    foundProduct = solvePathToProduct(currNode.right, product, productSoFar);
    if (foundProduct) {
      let path = "R" + foundProduct;
      return path;
    }
  }

  return null;
}

function setUp() {
  let root = new Node(2);

  let n1 = new Node(4);
  let n2 = new Node(3);

  let n3 = new Node(3);
  let n4 = new Node(2);
  let n5 = new Node(6);

  let n6 = new Node(2);
  let n7 = new Node(9);
  let n8 = new Node(5);
  let n9 = new Node(2);

  let n10 = new Node(10);
  let n11 = new Node(5);
  let n12 = new Node(2);
  let n13 = new Node(15);
  let n14 = new Node(5);

  root.left = n1;
  root.right = n2;

  n1.left = n3;
  n1.right = n4;
  n2.left = n4;
  n2.right = n5;

  n3.left = n6;
  n3.right = n7;
  n4.left = n7;
  n4.right = n8;
  n5.left = n8;
  n5.right = n9;

  n6.left = n10;
  n6.right = n11;
  n7.left = n11;
  n7.right = n12;
  n8.left = n12;
  n8.right = n13;
  n9.left = n13;
  n9.right = n14;

  return root;
}

function main() {
  let root = setUp();
  let product = 720;
  let pathToProduct = solvePathToProduct(root, product, 1);

  pathToProduct = pathToProduct.slice(0, -1);
  console.log(pathToProduct);
}

main();
