// N이 백만정도 되면 O(N)이나 O(NlogN) 정도로 해야함 -> 모든케이스는 에바
// 현재 보고 있는 숫자가 다음숫자보다 작으면 지우는 방향으로 알고리즘을 짜봐도 될듯!
// 근데 테스트케이스 4에서 안됨
// 차라리 순회를 돌다가 이전의 값들보다가 크면 다 지우는 것 ??
// 큰 값이 나오면 이전값 중 더 작은 값 전부 다 삭제한다 로 정리가 됨.
// stack의 원리와 비슷해짐
// 스택의 바닥에서 부터 탑은 큰수부터 작은수로 나열이 되어야함
//그리디 문제는 입력값이 크고  직관적으로 풀기가 가능함

function solution(number, k){
  const stack = [];
  let count = 0; //지운 개수

  for(const item of number){ //입력받은 숫자 문자열 순회
    while(count < k && stack[stack.length - 1] < item) {
      stack.pop(); //이순간 탑이 제일 작은 숫자가 되어야함.
      count += 1;
    }
    stack.push(item);
  }

  while(count < k) { // "9876543" 같이 뒤가 계속 작은경우
    stack.pop();
    count += 1;
  }

  return stack.join('');
}