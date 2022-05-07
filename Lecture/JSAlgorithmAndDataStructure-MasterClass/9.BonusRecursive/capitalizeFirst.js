/*
Given an array of strings,
capitalize the first letter of each string in the array.
 */
function capitalizeFirst (arr) {
  let answer = [];
  
  const helper = (arr) => {
      if(!arr.length) return;

      const changed = arr[0].slice(0,1).toUpperCase()+arr[0].slice(1);
      answer.push(changed);

      return helper(arr.slice(1));
  }

  helper(arr);
  return answer;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
