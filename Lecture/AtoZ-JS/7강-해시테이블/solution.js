//1. 같은장르끼리 묶어야함
//2. 묶인 노래를 재생순으로 정렬
//3. 노래를 2개까지 자르는 작업이 필요.

// 핵심키워드는 "묶는것", "정렬"=> 묶는것이라는 키워드가 나온다 생각되면 해시테이블을 생각하자.

function solution (genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index)=> [genre, plays[index]]) //그냥 map을 통해서 반복문에 동시에 돌려보리기
    .forEach(([genre, play],index)=>{ //곧바로 반복문 붙여서 
      const data = genreMap.get(genre) || {totla: 0, songs: []}; //초기 undefined대응을 위한 초기값 설정
      genreMap.set(genre, { //hash map에 데이터 세팅해주기
        total: data.total +  play, //전체 플레이 회수
        songs: [...data.songs, {play, index}].sort((a,b)=> b.play - a.play).slice(0,2) //내림차순 정렬하고 2개만 잘라낸 음악 리스트
      })
    });

//문법활용의 엄청난 예시인듯 하다 .. 고차함수를 적극적으로 이용해보는것도 꽤 좋은방식 같음
//묶는 것과 정렬의 연습에 적합할듯.
  return [...genreMap.entries()]
    .sort((a,b)=> b[1].total - a[1].total)
    .flatMap(item=> item[1].songs)
    .map(song => song.index);
}