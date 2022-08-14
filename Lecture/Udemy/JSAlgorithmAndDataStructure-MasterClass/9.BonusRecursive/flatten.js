/*
 which accepts an array of arrays and returns a new array 
 with all values flattened.
 */

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  
    let answer = [];
    const helper = (arr) => {
        arr.map((el)=>{
          if(typeof el === "object"){
            helper(el);
          }else{
            answer.push(el);
          }
        })
      }
      
      helper(arr);
      return answer;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//Solution
//typeof가 아닌 Array생성자의 isArray메서드를 활용함.
//push로 불명확한 추가가 아닌 concat을 사용
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
