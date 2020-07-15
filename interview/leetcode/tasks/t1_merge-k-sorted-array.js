// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
//Bed arhitect. Check first, than proceed with list or remove. Remove balancing list after.
console.clear();
console.dir(
  mergeKLists([
    { val: 0, next: { val: 4, next: { val: 5, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } },
    { val: 2, next: { val: 6, next: null } },
  ])
);

//   functions

function mergeKLists(lists) {
  // lists = [[],[],[]]
  lists = balanceList(lists);
  if (!lists[0]) return null;
  let res = {};
  while (lists[0]) {
    // console.log(lists[0]);
    let curMin = {
      list: lists[0],
      index: 0,
    };

    lists.forEach((list, i) => {
      //   console.log(curMin.list.val + " > " + list.val);
      if (curMin.list.val >= list.val) {
        curMin.list = list;
        curMin.index = i;
      }
    });

    let next = {
      val: curMin.list.val,
      next: null,
    };

    if (!getLast(res).val && getLast(res).val != 0) {
      res.val = next.val;
      res.next = null;
    } else {
      getLast(res).next = next;
    }

    lists[curMin.index] = lists[curMin.index].next;
    if (lists[curMin.index] == null) {
      lists.splice(curMin.index, 1);
    }
    // console.log(next);
  }
  return res;
}

function getLast(list) {
  let cur = list;

  while (cur.next) {
    cur = cur.next;
  }

  return cur;
}

function balanceList(lists) {
  let res = lists.filter((item) => (item == null ? false : true));
  return res;
}

// console.log(
//   getLast({ val: 1, next: { val: 4, next: { val: 5, next: null } } })
// );
