//ref:


//Frist Trail
//여전히 Linked List는 너무 어색함
// 또 배열로 걍 리턴해줄 생각만함
//큰 수 대응이 안됨 ;;
var addTwoNumbers = function(l1, l2) {
  //걍 둘다 next안 나올때까지 val값 배열에 집어넣고 둘이 더하고 retur?..
  let l1Val = 0;
  let count = 0;
  let l2Val = 0;
  while(l1) {
      l1Val += l1.val* (10**count)
      l1 = l1.next;
      count +=1;
  }
  count = 0;
  while(l2){
      l2Val += l2.val * (10**count);
      l2 = l2.next;
      count +=1;
  }
  
  const madeArr = Array.from(String(l1Val+l2Val)).reverse();
  
  let head = null;
  let curr = null;
  for(let num of madeArr){
      if(!head) {
          head = new ListNode(num, null);
          curr = head;
      }else{
          curr.next = new ListNode(num, null);
          curr = curr.next;
      }
  }
  return head;
};

//Best Answer
//나 처럼 별도로 배열을 만들어서 하지 않고 대부분 링크드리스트의 특징을 살려가며 곧바로 새로운 링크드리스트로 만들었다.

var addTwoNumbers = function(l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;
  
  while (l1 || l2) {//l1,l2링크드리스트가 존재할때 까이
      if(l1) {
          //l1이 있으면 sum변수에  l1값을 더해줌
          sum += l1.val;
          //l1을 l1의 다음 노드로 업데이트해줌
          l1 = l1.next;
      }
      if(l2) {
          sum += l2.val;
          l2 = l2.next;
      }
      //이게 덧셈이니까 2자리수 이상 나올 경우 그 나머지만 써야함 (11 -> 1)
      current.next = new ListNode(sum % 10);
      current = current.next;
      //이제 여기서 sum이 9 보다크면 다음 노드로 1의 값을 넣어줌 
      sum = sum > 9 ? 1 : 0;
      if (sum) current.next = new ListNode(sum);
  }
  return result.next;
};

//결론
// 링크드 리스트 문제를 풀때는 코드를 단계별로 봐야 좀 접근 이 쉬운 것 같음
//next나 val처리 같은게 그래보임.. 해도해도 그럼..