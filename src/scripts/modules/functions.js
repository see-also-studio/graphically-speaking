export function randomArray(x, y) {
  let a = [];
  for (let i = x; i <= y; i++) {
    a.push(i);
  }
  let j, z;
  for (let i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    z = a[i];
    a[i] = a[j];
    a[j] = z;
  }
  return a;
}

// Fisher-Yates Shuffle.
export function shuffleArray(array) {
  console.log('shuffling');
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
