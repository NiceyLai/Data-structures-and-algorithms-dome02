// 选择排序最终代码

let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    console.log(`----`); //这个log很精髓
    console.log(`i: ${i}`);
    let index = minIndex(numbers.slice(i)) + i;
    console.log(`index: ${index}`);
    console.log(`min: ${numbers[index]}`);
    if (index !== i) {
      swap(numbers, index, i);
      console.log(`swap ${index}: ${i}`);
    }
  }
  return numbers;
};

let swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
let minIndex = (numbers) => {
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};

let numbers = [9, 4, 23, 7];
console.log(sort(numbers));
