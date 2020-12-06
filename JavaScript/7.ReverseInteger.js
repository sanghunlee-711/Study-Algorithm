//ex input x = 123, output = 321
//ex2 input x = -123, output = -321
//ex3 input x = -120, output = 21
//ex4 input x = 0 , output = 0
//현상을 통해 패턴을 관찰하자!
// 10.25
// -가 있으면 -는 제일 앞에있다.  0이 첫번째 위치(index=0)이 아닐때는 output에서 제거가 된다, 아닐때는 0 그대로 나옴
// 1. string 으로 만들어서 split을 시키면 각 인덱스를 얻을 수 있음
// 2. index를 얻어서 인덱스0에 - 가 있으면 다음 인덱스부터 반대로 뒤집어보자(reduce사용 고고)
// 2.1 reverse 시킨 것에서 index 0에 해당하는 값이 0 이면 삭제하기
// 2.2 reverse 시킨 것에서 마지막 index에 해당하는 것이 -이면 삭제하기
// 3. 0의 경우 그냥 하나들어오는 케이스를 만들까 ..
// 다시 풀어도 문제가 많네 .. 어디서부터 손을대야하나
//숫자 크기로 판단 각 ? => 120은 0제거 필요 123 은 걍 반대
//10.26
let x = 123;
var reverse = function (x) {
  let splitNum = String(x).split("").reverse();
  let answer;

  if (splitNum[splitNum.length - 1] === "-") {
    answer = -1 * Number(splitNum.slice(0, splitNum.length - 1).join(""));
  } else if (splitNum[0] === "0") {
    answer = Number(splitNum.slice(1, splitNum.length).join(""));
  } else {
    answer = Number(splitNum.join(""));
  }

  return answer > 2 ** 31 - 1 || answer < -Math.pow(2, 31) ? 0 : answer;
};
