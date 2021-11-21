class Node:

    def __init__(self, item):
        self.data = item
        self.prev = None
        self.next = None


class DoublyLinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None) #처음부터 head를 더미노드를 만듦
        self.tail = Node(None) #처음부터 tail을 더미노드를 만듦
        self.head.prev = None
        self.head.next = self.tail # 양방향 연결
        self.tail.prev = self.head #양방향 연결
        self.tail.next = None


    def __repr__(self):
        if self.nodeCount == 0:
            return 'LinkedList: empty'

        s = ''
        curr = self.head
        while curr.next.next:
            curr = curr.next
            s += repr(curr.data)
            if curr.next.next is not None:
                s += ' -> '
        return s


    def getLength(self):
        return self.nodeCount


    def traverse(self): #순회
        result = []
        curr = self.head
        while curr.next.next:
            curr = curr.next
            result.append(curr.data)
        return result
      
    def reverse(self): #역 순회
        result = []
        curr = self.tail
        while curr.prev.prev:
          curr = curr.prev
          result.append(curr.data)

        return result

    def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None

        if pos > self.nodeCount // 2:
            i = 0
            curr = self.tail
            while i < self.nodeCount - pos + 1:
                curr = curr.prev
                i += 1
        else:
            i = 0
            curr = self.head
            while i < pos:
                curr = curr.next
                i += 1

        return curr


    def insertAfter(self, prev, newNode):
        next = prev.next
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        self.nodeCount += 1
        return True

    def insertBefore(self, next, newNode):
      prev = next.prev
      newNode.prev = prev
      newNode.next = next
      prev.next = newNode
      next.prev = newNode
      self.nodeCount += 1
      return True
  
    def insertAt(self, pos, newNode):
      if pos < 1 or pos > self.nodeCount + 1:
          return False

      prev = self.getAt(pos - 1)
      return self.insertAfter(prev, newNode)
  
    def popAfter(self,prev):
        #최 극단 처리는 head와 tail에 노드가 이미 존재하기 때문에 해주지 않아도 됨
        #뽑아낼 녀석 타겟팅
        curr = prev.next
        #poping
        prev.next = curr.next
        #양방향 설정
        prev.next.prev = prev
        self.nodeCount -= 1
        return curr.data

    def popBefore(self, next):
      curr = next.prev
      next.prev = curr.prev
      next.prev.next = next
      self.nodeCount -= 1
      return curr.data

    def popAt(self, pos):
      if pos < 1 or pos > self.nodeCount : #범위 중요(이제 헤드랑 테일에는 더미노드가 존재)
        raise IndexError
      
      prev = self.getAt(pos - 1)  #popBefore를 하게 되면 첫번째 노드인 경우 처리가 안됨
      return self.popAfter(self, prev)

    def concat(self, L):
      # if self.nodeCount == 0: #self.가 빈 리스트인 경우
      #   self.head = L.head
      #   self.tail = L.tail
      #   self.nodeCount = L.nodeCount #비어 있으므로 병합 후 길이 할당 필요
      #   return True
      
      #나누기 위한 조건인 L이 빈 리스트이거나 self가 빈 리스트 이거나둘다 비어있는 경우 
      # 그냥 리턴 되는 케이스이므로 따로 조건 안넣고 실행해도 됨
      # 어차피 양방향이기에 상관이 없다. -> 이게 핵심

      self.tail.prev.next = L.head.next
      L.head.next.prev = self.tail.prev
      self.tail = L.tail
      self.nodeCount += L.nodeCount
      return True
