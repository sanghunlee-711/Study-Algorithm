class PriorityQueue:
  def __init__(self, x): #양방향 연결리스트를 이용하여 빈큐를 초기화한다.
    self.queue = DoublyLinkedList()

  def enqueue(self,x):
    newNode= Node(x)
    curr = '문제' #현재의 위치
    while '문제' and '문제': # 끝을 만나지 않는 동안, 우선순위를 비교하는 조건 
      # x < curr.next.data
      curr = curr.next
    self.queue.insertAfter(curr,newNode) #insertAfter, insertBefore메서드를 사용하면 됨

  #양방향 연결리스트의 getAt()메서드를 사용하지 않음 -> ?? 왜
  #getAt은 해당하는 칸까지 처음부터 세어나가기 때문에 비효율적임

  
