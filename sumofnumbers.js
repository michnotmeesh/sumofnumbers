function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

// function sumRecursion(list) {
//   if (list.length == 0) {
//     return 0;
//   } else {
//     return list[0] + sum(list[list.length - 1]);
//   }
// }

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {return memo + num;}, 0);
}