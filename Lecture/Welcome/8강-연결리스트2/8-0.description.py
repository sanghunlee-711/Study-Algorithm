description ="""
  7강에서 정의한 6가지 구현할 연산 중 
  길이 얻어내기 연산은 그냥 노드 카운트를 리턴하면 됨 ㅎ

  8강에서는 원소 삽입, 삭제, 끼워넣기를 구현할 예정


  원소의 삽입(insertAt)은 post가 가리키는 위치에 (1<= post <= nodeCount +1)
  newNode를 삽입하고 성공/실패에 따라 true/false를 정의하면 될 듯.

아래와 같이 구현 가능
1. 집어 넣을 위치(pos)에 pos-1 한 위치를 prev로 정의
2. new Node의 뒤쪽 링크를 조정
3. 앞선 노드 pos-1이 newNode를 가리키게 함
4. nodeCount +=1 만큼 증가


"""
def insertAt(self, pos, newNode):
  prev = self.getAt(pos-1)
  newNode.next = prev.next
  prev.next = newNode
  self.nodeCount += 1

caution = """
  삽입하려는 위치가 리스트 맨 앞 일 때
  prev가 없어 Head를 조정해야함

  리스트 맨 끝인 경우 Tail조정이 필요

  위 두가지를 잘 처리하면 빈 리스트에 삽입하는 경우도 처리가 됨.
"""

def insertAt2(self, pos, newNode):
  if pos < 1 or pos > self.nodeCount + 1: 
    return False
  
  if pos == 1: #제일 앞에  삽입하는 경우 or 빈리스트에 삽입하는 경우
    newNode.next = self.head #순서를 주의해야함,
    self.head = newNode

  else:
    if pos == self.nodeCount +1:
      prev = self.tail
    else:
      prev = self.getAt(pos - 1)
    newNode.next = prev.next
    prev.next = newNode
  
  if pos == self.nodeCount + 1: #맨 마지막에 삽입하므로 tail조정  or 빈리스트에 삽입하는 경우
    self.tail = newNode

  self.nodeCount +=1
  return True

usage = """
 수업 중 구현된 파일 사용 테스트 해보고 싶을 시
 terminal에
 1. python 
 2. from linkedlist import *
 3. Node 몇개 정의하기
 4. L = LinkedList()
 5. L.insertAt(1,a)등... 삽입
 6. L 
 7. 연결된 리스트 확인 가능


링크드 리스트는 인덱싱이 되지 않으므로 길이에 따라 선형 시간이 걸린다는 점이 단점

"""
