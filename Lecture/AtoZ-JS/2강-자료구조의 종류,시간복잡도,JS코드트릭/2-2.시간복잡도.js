// O(n)
const On = () =>{
  for(let i =0; i <n; i +=1){
    console.log(i)
  }
}
// O(logn)
const OLogN = () => {
  for(let i =1; i < n;  i*=2){
    console.log(i)
  }
}

// O(nlogn)
const OnLogn =() => {
  for(let i = 0; i < n; i +=1){
    for(let j = 1; j <=n; j *=2){
      console.log(j);
    }
  }
}

// O(n^2)
const On2 = () =>{
  for(let i =0; i < n; i += 1){
    for(let j = 0; j < n; j +=1){
      console.log(j)
    }
  }
}