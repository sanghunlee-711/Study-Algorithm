class CircularQueue:
  def __init__(self, n): #빈 큐를 초기화 하고 
    self.maxCount = n # 인자를 주어진 최대 큐길이를 설정
    self.data = [None]*n  #길이 n에 모두 None이 들어있는 배열
    self.count = 0
    self.front = -1 #이렇게 -1로 인덱스를 0부터 사용가능하나 peek
    self.rear = -1

  def size(self):
    return self.count

  def isEmpty(self): #큐가 비어있는가
    return self.count == 0

  def isFull(self): #큐가 꽉 차 있는가?
    return self.count == self.maxCount

  def enqueue(self, x): #제일 뒤에 데이터 집어 넣기
    if self.isFull():
      raise IndexError('Queue full')
    self.rear = (self.rear + 1) % self.maxCount #문제
    self.data[self.rear] = x
    self.count += 1

  def dequeue(self): #큐에서 데이터 제일 앞 원소 뽑아내기
    if  self.isEmpty():  #빈칸 임 조건 수정 필요
      raise IndexError('Queue empty')
    self.front = (self.front + 1) % self.maxCount #빈칸 임 조건 수정 필요
    x = self.data[self.front] #빈칸 임 조건 수정 필요
    self.count -= 1
    return x

  def peek(self): #큐의 맨 앞 원소 들여다 보기
    if self.isEmpty():
      raise IndexError('Queue empty')
    return self.data[(self.front+1) % self.maxCount] #문제


description ="""
궁금한점 답변 발췌

이 예제에서 구현한 환형 큐 (circular queue) 에서는 초기에 front 와 rear 를 공히 -1 로 초기화한 후에,
(1) enqueue 연산의 경우 rear 를 전진시키고 (+1) 그 위치에 원소를 삽입하고
(2) dequeue 연산의 경우 front 를 전진시키고 (+1) 그 위치의 원소를 리턴합니다.
이렇게 함으로써 리스트 data 를 인덱스 0 부터 이용하게 되며, front 는 큐에서 가장 앞에 들어 있는 원소 (현재 큐에 들어 있는 원소들 중 가장 먼저 삽입된 원소) 를 가리키고 있지 않고 그보다 하나 작은 인덱스를 가지고 있게 됩니다.

이러한 이유로, peek 연산에서는 front 를 전진시키지는 않지만, 큐의 가장 앞에 있는 (가장 먼저 삽입된) 원소를 얻기 위해서는 front + 1 의 위치에 있는 원소를 참조해야 합니다.

만약 질문에서처럼 peek 연산에서 front 위치에 있는 원소를 그냥 리턴하도록 큐를 만든다고 하면, dequeue 연산에서는 front 가 가리키고 있는 인덱스의 원소를 리턴하는 것으로 하고, 그것을 취한 이후에 front 를 전진 (+1) 시키는 것으로 정할 수 있겠지요.

*** 위에서, front 와 rear 의 전진에서는 "환형" 구조를 위하여 1 을 더하는 것 외에도 큐의 크기로 나눈 나머지를 취하는 연산이 수반되어야 함은 물론이지만, 설명의 명료성을 위하여 그 부분은 빼 놓고 얘기했습니다.
"""
