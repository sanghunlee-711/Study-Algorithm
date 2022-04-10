function solution(genres, plays) {
  //2단계 해시테이블 쌉가능
  // 1. {classic: {0:500}, {2: 150}, {3: 800}} 형태로 만들기
  // 2. 전체 장르에서 총합 구한 것을 배열로 넣고 내림차순 정렬 sort(a,b=>(b-a));
  // 3. 내림차순 정렬된 배열 기준으로 
  //    플레이 리스트에 장르별로 각 횟수 만큼 정렬된 인덱스를 넣어줌
//{clssic: {total: num , data: {0:{400}, 2:{300}}}}...
const hashTable = {};
let keyList = [];
let playlist = [];
//장르별 분리
  for(let i = 0; i < genres.length; i += 1){
    hashTable[genres[i]] = {...hashTable[genres[i]], [i]:plays[i]  };
  }

  //각 장르별 총합 및 내림차순 리스트
  for(let key in hashTable) {
    hashTable[key].total = Object.values(hashTable[key]).reduce((a,b)=>a+b);
    hashTable[key].list = Object.keys(hashTable[key]).filter((el)=>el !== 'total').sort((a,b)=> hashTable[key][b] - hashTable[key][a]).slice(0,2)
  }
  
  //키 리스트 만들기
  for(let key in hashTable) {
    keyList  = Object.keys(hashTable).sort((a,b)=> hashTable[b].total-hashTable[a].total)
  }
  
  for(let i of keyList) {
    playlist = playlist.concat(hashTable[i].list)
  }
  
  //반복문 개판이라 될까 이게 ..;.
  return playlist.map((el)=> +el);
}

//자료 최대수가 100개라 통과가 가능은하였던 문제 .. 