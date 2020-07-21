//
// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.

main();

function main() {
  let nodes = {
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  };
  console.log(nodes);
  console.log(reverseKGroup(nodes, 2));
  //   console.log(reverseNodes(nodes));
}

function reverseKGroup(head, k) {
  let reversedNodes = null;
  let firstNode = head;
  if (!haveKNodes(firstNode, k)) {
    return head;
  } else {
    let splitedNodes = splitKNodes(firstNode, k);
    reversedNodes = reverseNodes(splitedNodes[0]);
    firstNode = splitedNodes[1];
  }

  while (haveKNodes(firstNode, k)) {
    let splitedNodes = splitKNodes(firstNode, k);
    getLastNode(reversedNodes).next = reverseNodes(splitedNodes[0]);
    firstNode = splitedNodes[1];
  }

  getLastNode(reversedNodes).next = firstNode;

  return reversedNodes;
}

// functions

function haveKNodes(node, k) {
  for (let i = 0; i < k; i++) {
    if (!node) {
      return false;
    }
    node = node.next;
  }
  return true;
}

function reverseNodes(nodes) {
  if (!nodes) return nodes;

  let reversedNodes = getLastNode(nodes);

  returnNextNode(nodes);

  return reversedNodes;
}

function returnNextNode(currentNode) {
  let nextNode;
  if (currentNode.next) {
    nextNode = returnNextNode(currentNode.next);
    currentNode.next = null;
    nextNode.next = currentNode;
  }
  return currentNode;
}

function splitKNodes(nodes, k) {
  let firstOfSplitedNodes = nodes;

  for (let i = 0; i < k - 1; i++) {
    nodes = nodes.next;
  }

  let lastOfSplitedNodes = nodes;
  nodes = nodes.next;
  lastOfSplitedNodes.next = null;

  return [firstOfSplitedNodes, nodes];
}

function getLastNode(nodes) {
  while (nodes.next != null) {
    nodes = nodes.next;
  }
  return nodes;
}
