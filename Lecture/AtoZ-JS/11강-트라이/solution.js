function makeTrie(words) {
  const root = {}; //루트노드를 설정할 변수를 만든다.
  for(const word of words) { // Trie를 구성하기 위한 루프를 돌린다.
    let current = root; //루트부터 시작
    for(const letter of word) { //단어의 글자를 하나씩 추출한다.
      //값을 넣는다. 리스트의 첫번째 값은 학슴된 단어가 몇개인지 카운팅하고
      //두번째 값은 트리구조로 이용할 노드 값으로 사용한다.
      if(!current[letter]) current[letter] = [0,{}];
      current[letter][0] = 1 + (current[letter][0] || 0); //카운팅을 위해 1을 더해준다(없으면 1+0 이다.);
      current = current[letter][1]; //current는 letter에 해당되는 노드로 이동한다.
    }
  }
  
  return root; //루트를 반환한다.
}

const solution =(words) =>{
  let answer = 0;
  const trie = makeTrie(words); // Trie구조 만들기

  for(const word of words) { //입력받은 단어 개수만큼 루프
    let count = 0;
    let current = trie; //루트부터 시작?? 뭔말이야
    for(const [index, letter] of [...word].entries()){ //iterating 타입 활용을 위해 entries사용 ??
      count += 1;
      if (current[letter][0] <= 1) { //단어가 하나이하로 남을경우 종료 ?
        break;
      }
      current = current[letter][1];
    }
    answer += count; //카운팅 더해주기
  }
  return answer;
}