console.log("Start");
const start = new Date().getTime();
const N = 100000000000;

let total = 0;
for (let i=0; i < N;  i +=1){
  total += i;
};

const end = new Date().getTime();
console.log(end - start);
console.log("Finish");