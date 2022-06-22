/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
row, col을 범위조절하면서 계속 이동시켜서 s 길이만큼 카운트 될 때까지 배열에 넣고
배열에서 flatMap을 해서 읽어오면 되지 않을까 ?
1. 미리 grid를 만들어줌
2. grid에 지그재그에 맞게 문자열 루핑을 돌림

*/
var convert = function(s, numRows) {
    if(numRows === 1) return s;
  let row = 0, 
      col = 0,
      isUp = false,
      newArr = new Array(numRows);
      stringArr = s.split("").reverse();

  for (let i = 0; i < numRows; i++) newArr[i] = [];
    
  while(stringArr.length) {
      if(row < numRows && !isUp) {
          if(row === numRows-1) {
              isUp = true;    
              continue;
          }
          newArr[row][col] = stringArr.pop();
          row++;
      }else if(row === 0 && isUp){
          isUp = false;
      }else{
          newArr[row][col] = stringArr.pop();
          row--;
          col++
      }
  }
  
  return newArr.flatMap(x=>x).join('');
};

//Best Answer

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  //top and bottom row = (numRows - 1)*2
  //middle rows = (numsRow - 1) * 2 - 2 * arrayRow
  
  if(numRows == 1) return s; 
  let answer = ''
  let rows = []
  let reverse = false;
  let count = 0; 
  
  //create array with indexes for rows
  for (let i = 0; i < numRows; i++) rows[i] = [];

  //loop through string
  for(i = 0; i < s.length; i++){
      //push string to relevant row
      rows[count].push(s[i]);
      if(reverse){
          count--
      }
      else count++
      
      if(count === numRows -1 || count === 0) reverse = !reverse
      
  }
  
  rows.forEach(row => {
      answer += row.join('')
  })
  return answer;
};

//
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */




 var convert = function(s, numRows) {
  if(numRows === 1) return s
  
  let matrix = new Array(numRows).fill('')

  let row = 0
  let direction = 1
  
  for(let i = 0; i < s.length; i++) {
      matrix[row] += s.charAt(i)
      
      row = row + direction
      
      if(row === 0 || row === numRows - 1) {
          direction = -direction   
      }
  }
  
  return matrix.join('')
  
};