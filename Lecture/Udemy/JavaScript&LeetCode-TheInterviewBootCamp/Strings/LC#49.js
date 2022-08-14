/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  const hash = {};
  
  for (let char of strs) {
      let key = char.split("").sort().join('');
      hash[key] = hash[key] || [];
      hash[key].push(char);
  }
  console.log(hash);
  return Object.values(hash);
};

/*
또 hash를 활용해보자
뭐 원래방식이랑 거의 똑같음. 
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 *  N은 문자열내의 문자 갯수 K는 문자열 길이
 * T.C : O(N K log K)
 * S.C: O(NK)
*/
  var groupAnagrams = function(strs) {
    let group = {};

    for(let i = 0; i < strs.length; i ++) {
      const word = s[i];
      const key = word.split("").sort().join('');
      if(!group[key]) group[key] = [];
      group[key].push(word);
    }

    return Object.values(group);
  };