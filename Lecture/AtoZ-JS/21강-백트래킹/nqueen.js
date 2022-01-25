//일단 모든 경우의 수를 찾는 것이 괜찮은 상태임
// 가지치기를 어케잘할 수 있을 까
// 1. 퀸을 둔행을 가지치기 한다.
// 2. 퀸을 둔 열을 가지치기 한다.
//3. 퀸을 둔 대각선 왼쪽, 오른쪽은 가지치기한다.

//가지치기를 위해 행과 열, 대각선을 루프를통해 검사하면 성능 크게 낭비하게 됨
// 최대한 적은 비용으로 가지치기를 위해 1차원 배열 사용
// 배열의 index는 행의위치로하고, 그 value는 열의 위치로 하자
// queen[2]=1 는 체스판 위에서 2번째 줄에 첫번째 칸에 해당하는 식으로
// 이런 데이터 형태를 잡으면 조건을 한 index(줄)에 여러 값을 둘 수 없기 때문에 
// 행은 자연스럽게 가지치기가 된다.
// index가 같다면(값이 존재하면) 둘 수 없으므로 가지치기를 한다.
// 행 열에 대한 차가 같다면 대각선에 있다는 뜻이므로 가지치기를 한다.
// ex) 1부터 시자한다고 가정 할 때 queen[3] =2, queen[1]=4일 때 행에 대한 차 (3-1=2)와
// 열에 대한 차 4-2가 같기때문에 대각선에 있다는 뜻이 된다.(절대값으로 계산시 왼 오 대각선 다 체크 가능)
// 검사비용을 이런식으로 아끼는 것이 가능하다.

const check = (queen, row) => {
  //이 전까지 두었던 퀸의 위치를 확인
  for(let i = 0; i< row; i+=1){
    //행의 위치와 대각선의 위치를 체크한다
    if(queen[i]===queen[row] || Math.abs(queen[i]- queen[row]) === row-i){
      return false //둘 수 없는 대각선의 케이스
    }
  }
  return true;
}

const search =(queen,row) =>{
  const n = queen.length;
  let count = 0;

  if(n === row) { //체스판 끝에 도달했다면 재귀 탈출을 위함
    return 1;
  }

  for(let col =0; col<n; col+=1){ //0부터 n까지 열을 돌면서 둘 수 있게 만듦
    queen[row] = col; //퀸을 한자리에 둬봄
    if(check(queen,row)){ //퀸을 두는 것을 확인하기 위한 메서드 사용
      count += search(queen, row+1); //퀸을 둘 수 있다면 다음 행으로 이동
    }
  }
  return count;
}

function solution(n) {
  //n개만큼의 배열을 0으로 초기화, 0번행부터 시작
  return search(Array.from({ length: n }, () => 0), 0);
}