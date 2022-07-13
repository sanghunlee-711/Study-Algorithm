
/*
범위를 봐서는 Big Int때리면 다 해결될줄 알아서 걍 때림
MDN에서는 number로 변환 후 BigInt로 변환하면 정확도 
유실이 가능성이 있으므로 string으로  걍씀
안타깝게도 IE에서 지원이 안되지만 현시점에서는
IE도 지원이안됨 ㅋ
*/
var multiply = function(num1, num2) {
  return BigInt(BigInt(num1)*BigInt(num2))+""
};

//Best Answer

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

const m = num1.length, n = num2.length, res = new Array(m+n).fill(0)

for (let i=m-1; i>=0; i--) {
  for (let j=n-1; j>=0; j--) {
      const p1=i+j, p2=i+j+1
      let sum = res[p2] + Number(num1[i]) * Number(num2[j])
      res[p2] = sum%10
      res[p1] += Math.floor(sum/10)
  }
}
if (res[0] === 0) res.shift()
return res.join('')
};