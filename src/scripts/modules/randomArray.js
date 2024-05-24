// return a randomly sorted array containing numbers between min and max
export function randomArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  let j, z;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    z = array[i];
    array[i] = array[j];
    array[j] = z;
  }
  return array;
}
