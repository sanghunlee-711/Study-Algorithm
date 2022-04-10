description = """
  연결리스트 self의 뒤에 또 다른 연결리스트인 L을 이어붙임
"""

def concat(self, L):
  self.tail.next = L.head
  if L.tail: #뒤의 리스트가 빈list인 경우처리를 위함.
    self.tail = L.tail
  self.nodeCount += L.nodeCount