function capitalizeWords (arr) {
  let answer = [];
  const helper = (arr) => {
      if(!arr.length) return;
      answer.push(arr[0].toUpperCase());
      helper(arr.slice(1));
  }
  
  helper(arr);
  
  return answer;
}

// capitalizeWords(["test","alpha","beta"]) //["TEST", "ALPHA", "BETA"];