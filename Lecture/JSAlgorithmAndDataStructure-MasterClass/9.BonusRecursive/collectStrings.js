function collectStrings (obj) {
  let answer = [];
  const helper = (obj) => {
      for(const key in obj) {
          console.log(typeof obj[key]);
          if(typeof obj[key] === 'string') {
              answer.push(obj[key]);
          }else if(typeof obj[key] === 'object' ) {
              helper(obj[key]);
          }
      }
      
  }
  helper(obj);
  

  
  
  return answer;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])