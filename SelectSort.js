//선택정렬
//정렬되지 않은 데이터를 앞에서부터 교환


function SelectionSort(arr) {
  let length = arr.length;
  let min;
  for (let outer = 0; outer < length - 1; ++outer) {
    min = outer;
    for (let inner = outer + 1; inner < length; ++inner) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }
    swap(arr, outer, min);
  }
  return arr;
}
