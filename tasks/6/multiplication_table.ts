/**
 * Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
 */

export function multiplicationTable(size: number): number[][] {
  const tableRows: number[] = Array.from({ length: size }, (_, i) => i + 1);

  return tableRows.map((row) => tableRows.map((col) => row * col));
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
