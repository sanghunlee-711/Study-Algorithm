//board
//[[0,0,0,0,0],
//[0,0,1,0,3],
//[0,2,5,0,1],
//[4,2,4,4,2],
//[3,5,1,3,1]]
//moves	[1,5,3,5,1,2,1,4]	,result 4
//sampleArr? [4,3,1,1,3,2,3,4]
// 1. 각 배열안의 배열을 작은배열이라 부르자
// 2, 첫번째 작은배열의 인덱스0의 값이 만약 0 이면 다음 순서의 작은 배열의(작은배열 인덱스 타고),
//해당 인덱스로 넘어가야한다(어케 넘어가지) 만약 moves의 0 번째 인덱스의 값이 1이면
// 0~2까지의 작은배열 인덱스들은 넘어가고 그다음 인덱스 3에 해당하는 작은배열의 첫번째 값이 나와야한다
// 그 첫번째 값을 sample Arr에 넣는다.
// 그리고 sampleArr 는 처음에 비어있다.
// 그럼 인덱스 1 번째 실행 부터는 그 sampleArr에 들어간 값과 비교하여
// 같다면 count 2를 올리면 될 것 같다.(터진 인형 개수라고 한다)
// 1번째 인덱스도 동일한 로직을 실행하면 된다.
// ex 1) moves[0]=1 board[0][1-1]==0 return board[1][1-1] === 0 ... board[3][1-1] != 0 sampleArr.concat

// 필요한것. 이중반복문, sampleArr, count

//사실 sampleArr를 만들지 않고 sampleNum을 만들어서 새로운 숫자를 더하고 그걸 이전의 증가량과 같은지 판별해가지고 같으면 같은게 들어온거니까 count를 해도 될 것 같은데
// 일단 간단한 것 부터 해보자
// count는 answer로 대체하면 될 듯
let sam = [1, 23, 4, 6];
sam.slice(0, 1);

function solution(board, moves) {
  let answer = 0;
  let sampleArr = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] != 0) {
        sampleArr = sampleArr.concat(board[j][moves[i] - 1]);

        if (j > 0 && sampleArr[j - 1] === sampleArr[j]) {
          answer = answer + 2;
          sampleArr.slice(0, j - 1);
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
