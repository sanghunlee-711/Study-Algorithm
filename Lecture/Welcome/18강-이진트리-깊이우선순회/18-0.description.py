description = """
- 이진트리의 추상적 자료구조
    이진 트리 구현시 링크드리스트의 prev, next에서 경험 했던 것 처럼
    Node하나에 left와 right를 주고 구현하면 된다
    Node하나는 Data, leftChild, rightChild를 가지게 된다.


      연산의 정의
        * size():현재 트리에 포함되어 있는 노드의 수를 구함
        * depth(): 현재트리의 깊이(또는 높이; height)를 구함
        * 순회 (traversal) - 깊이 우선순회(depth first traversal)와 넓이 우선순회(breadth frist traversal)이 존재함
            그래프 자료구조에서도  유사한 순회가 적용 됨

            이중 깊이 우선순회가 보다 간단하므로 깊이우선순회 먼저 알아보자!

            깊이 우선순회 중에서도 이진트리를 대상으로 하는 경우 세가지의 서로 다른순서를 정의할 수 있게 된다. -> x를 자기자신 node라고 보면 됨
            - 중위 순회(in order traversal): 왼쪽 서브트리를 순회한 뒤 노드 x를 방문하고 그리고 나서 오른쪽 서브트리를 순회 
            - 전위 순회(pre-order traversal): 노드 x를 방문한 후에 왼쪽 서브트리를 순회, 마지막으로 오른쪽 서브트리를 순회
            - 후위 순회(post-order traversal): 왼쪽 서브트리를 순회, 오른쪽 서브트리를 순회, 그리고 마지막으로 노드 x 방문

            순회 알고리즘 또한 정의에서 느껴지는 것과 비슷하게 재귀적으로 구현하는것이 매우 자연스럽다!
"""
