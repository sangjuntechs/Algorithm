//퀵 정렬
//퀵 정렬은 분할 정복 방법과 재귀를 통해 리스트를 정렬함.

function QuickSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  let middle = arr[0];
  let len = arr.length;
  let left = [],
    right = [];
  for (let i = 1; i < len; ++i) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return QuickSort(left).concat(middle, QuickSort(right));
}
