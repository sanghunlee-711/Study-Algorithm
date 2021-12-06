class CircularQueue:
  def __init__(self, n): #빈 큐를 초기화 하고 
    self.maxCount = n # 인자를 주어진 최대 큐길이를 설정
    self.data = [None]*n  #길이 n에 모두 None이 들어있는 배열
    self.count = 0
    self.front = -1 #이렇게 -1로 하면 이후의 문제가 쉬워짐
    self.rear = -1

  def size(self):
    return self.count

  def isEmpty(self): #큐가 비어있는가
    return self.count == 0

  def isFull(self): #큐가 꽉 차 있는가?
    return self.count == self.maxCount

  def enqueue(self, x):
    if self.isFull():
      raise IndexError('Queue full')
      #Index Error('Queue full) exception으로 처리
    self.rear = [] #빈칸임 변경해야 함.
    self.data[self.rear] = x
    self.count += 1

  def dequeue(self): #큐에서 데이터 원소 뽑아내기
    if  False:  #빈칸 임 조건 수정 필요
      raise IndexError('Queue empty')
    self.front = [] #빈칸 임 조건 수정 필요
    x = [] #빈칸 임 조건 수정 필요
    self.count -= 1
    return x

  def peek(self): #큐의 맨 앞 원소 들여다 보기
    if False:
      raise IndexError('Queue empty')
    return []
