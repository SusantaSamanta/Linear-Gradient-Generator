const randomColorGenerate = () => {
  let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','b','e','f'], n = 6, rand = '#';
  for(i=1;i<=n;i++){
    rand += arr[Math.floor(Math.random() * 16)];
  }
  return rand;
}

console.log(randomColorGenerate())
console.log(randomColorGenerate())
console.log(randomColorGenerate())
console.log(randomColorGenerate())
console.log(randomColorGenerate())
console.log(randomColorGenerate())


