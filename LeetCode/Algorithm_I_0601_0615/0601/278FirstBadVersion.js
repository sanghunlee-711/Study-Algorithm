var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  
return function (n) {
  let start = 0;
  let end = n;
   while(start <= end){
       let middle = Math.floor((start+end)/2);
       if(isBadVersion(middle)){
           end = middle -1;
           if(!isBadVersion(middle-1)) return middle;
       }else{
           start = middle + 1;
       }
   }
}
};