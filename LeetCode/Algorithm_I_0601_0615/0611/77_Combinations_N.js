/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/*
답봄
*/
var combine = function(n, k) {
  const result = [];
    
    const helper = (start, currComb) => {
        if(currComb.length === k) {
            result.push([...currComb]);
            return;
        }
        
        for(let i = start; i <= n; i++) {
            currComb.push(i);
            helper(i+1, currComb);
            currComb.pop();
        }
        return;
    }
    
    helper(1, []);
    return result;
    
};