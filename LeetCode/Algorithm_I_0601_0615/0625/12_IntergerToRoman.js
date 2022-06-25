/**
 * @param {number} num
 * @return {string}
 */

/*
멍청하게 케이스별로 다 나눠주려했음
당연히 안됨 ㅋㅋㅋ
*/
 var intToRoman = function(num) {
  const hash = {
      1 : "I",
      5 : "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000 : "M",
  }
  let answer = "";
  if(num < 5) {
      for(let i = 0; i < num; i++){
          answer+="I";
      }
  }
  
  let str = num.toString();
  let len = str.length;
  
  for(let i = 0; i < len; i++) {
      const curr = +str[i] * Math.pow(10,(len -1 - i));
      console.log({curr})
      if(hash[curr]) {
           answer+= hash[curr];
      }else {
          let divideVal = 0;
          if(curr % 9 === 0) {
              divideVal = (curr / 9);
              answer += hash[divideVal];
              answer += hash[divideVal*10]
              //9로 나눠지면 1이나 10이나 100을 더해서 올리고 나머지 값을 붙여줘야하는데 ..
          }else if(curr % 4 === 0){
              divideVal = (curr / 4);
              console.log(divideVal*10/2, divideVal)
              answer += hash[divideVal];
              answer += hash[divideVal*10/2]
              
          }
      }
  }
  return answer;
};

const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRoman = function(N) {
    let ans = ""
    for (let i = 0; N; i++)
        while (N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};

/**
 * @param {number} num
 * @return {string}
 */
/*
discuss 참고
로마숫자와 정수를 배열에 넣어놓고 감면해주며 붙이는 방식임
숫자가 해당 기준보다 작을때 계속 현재 숫자를 빼주며 로마숫자를 붙이며 돌리는 방식
*/

var intToRoman = function(num) {
  const nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  let current = num;
  let answer = "";
  let i = 0;
  
  while(current) {
      while(current >= nums[i]) {
          answer += rom[i];
          current -= nums[i];
      }
      i++;
  }
  return answer;
};