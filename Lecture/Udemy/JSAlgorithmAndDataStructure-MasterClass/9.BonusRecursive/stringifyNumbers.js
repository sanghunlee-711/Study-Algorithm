/*
which takes in an object and finds all of the values 
which are numbers and converts them to strings.
Recursion would be a great way to solve this!
*/

const stringifyNumbers = (obj) => {
  const answer = {};
  for(let key in obj) {
      if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
          answer[key] = stringifyNumbers(obj[key]);
      }else if(typeof obj[key] === "number"){
          answer[key] = obj[key]+"";
      }else{
          answer[key] = obj[key];
      }
  }
  
  return answer;
}