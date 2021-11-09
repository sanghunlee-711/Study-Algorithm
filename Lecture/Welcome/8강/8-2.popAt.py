description ="""
  r= L.popAt(pos)

  1. pos-1번째 노드 찾아야함
  2. prev라는 변수로 pos-1번째 가리키게 함
3. 뽑아야 할놈은 curr
4. prev.next <- curr.next로 가리키게 함
5. nodeCount -= 1로 조정
6. 뽑은 놈 return
"""

caution = """
  삭제하려는 node가 맨 앞의 것 일 때
  prev는 없음
  Head 조정 필요

  리스트 맨끝의 node를 삭제할 때
  Tail조정 필요

  유일한 노드 삭제 시 위의 조건으로 해결 가능한가???->문제일듯
  
"""
