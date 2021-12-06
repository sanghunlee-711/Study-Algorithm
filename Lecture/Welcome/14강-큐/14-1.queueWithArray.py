class ArrayQueue:
  def __init__(self): #빈큐를 초기화
    self.data = [] 

  def size(self): #큐의 크기를 리턴 (O(1))
    return len(self.data)
  
  def isEmpty(self): #큐가 비어있는지판단 (O(1))
    return self.size() == 0

  def enqueue(self, item): #데이터 원소를 추가 (O(1))
    self.data.append(item)
  
  def dequeue(self): #데이터 원소를 삭제(리턴) (O(n)) ->맨 앞의 원소 꺼내고 다 당겨야하므로n만큼 원소(data element)가 움직여 줘야함
    return self.data.pop(0) #0번 원소만 없어지고 다 당겨짐 그리고 pop한거 리턴
  
  def peek(self): #(O(1))
    return self.data[0]