description = """
  추상적 자료구조란 
  내부 구현은 숨겨두고(신경쓰지 않고)

  밖에서 보이는것들 두가지를 제공함
  1. Data(정수 ,문자열, 레코드 등..), 
  2. 연산자(삽입, 삭제 ,순회, 정렬, 탐색 등..)

  각 칸의 데이터 하나를 노드라고 부르고 Data, Link(다음 원소가 어딘지 가리키는 것.)의 정보를 담고 있음

  제일 첫 노드를 리스트의 헤드(Head)라고 하며 끝은 테일(Tail)이라 한다.
  노드가 몇개 있는지 또한 기록해두면 좋다.(#of nodes:3)등으로 표현
"""

description2 ="""
  연산정의
1. 특정 원소 참조(k번째)
2. 리스트 순회
3. 길이 얻어내기
4. 원소삽입
5. 원소삭제
6. 두 리스트 합치기

팁으로는 굳이 0번부터 시작하지 않고 1번부터 노드를 정의하여 다른목적으로 0을 사용하여 코드 효율을 극대화 할 수 있다고 함..
"""

class Node:
  def __init__(self, item):
    self.data = item
    self.next = None
      

class LinkedList:
  def __init__(self):
    self.nodeCount = 0
    self.head = None
    self.tail = None


#Linked List의 메서드이다. pos번째인 노드를 뽑아 그 노드 자체를 리턴해주기 위한 메서드임
def getAt(self, pos): 
  if pos <=0 or pos > self.nodeCount:
    return None

  i=1
  curr = self.head
  while i < pos:
    curr = curr.next
    i += 1

  return curr

# 리스트 순회 -> 끝까지 순회하는 걸 찾기 위해서는 마지막의 노드의 방향지가 None인걸 찾으면 된다.

# def traverse(self):
#   answer = []
#   i = 1
#   while i <= self.nodeCount:
#     answer.append(self.getAt(i))
  
#   return answer
