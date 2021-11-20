description = """
  아이폰의 홈버튼을 두번 눌러서 실행된 여러가지 앱들을 보면
  여러가지 실행된 앱들이 뒤에 있는데 
  이때 무언가를 삭제할때 하나를 위로 올리는 행위가 있음
  이런걸 구현할때 삽입과 삭제가 유연해야하는데 이 때 링크드리스트가 적절함

  다시한번 링크드 리스트는 '삽입과 삭제'가 쉽게 된다는것이 최대 장점임

  그런데 지금까지는 insertAt을 할때마다 맨 앞에서부터 노드를 찾는 getAt을 사용하여 찾게되므로 비효율적임

  그래서 새로운 메서드인 InsertAfter(prev, newNode)
  popAfter(prev)를 만들게 되는데 이렇게 되는 경우 맨앞이 가장 문제가 됨
  그래서 더미 노드를 만들게 됨

"""

problem = """
  prev의 다음 노드를 삭제하고 
  그 node의 data를 리턴

  1. prev가 마지막 node 일 때 (prev.next === None) -> 삭제할 노드가 없으므로 return None
  2. 리스트 맨끝의 node를 삭제할 때 (curr.next === None) -> Tail조정 필요

"""
