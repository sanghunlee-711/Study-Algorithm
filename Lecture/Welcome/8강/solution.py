class Node:

    def __init__(self, item):
        self.data = item
        self.next = None


class LinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None


    def getAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            return None

        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1

        return curr


    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos == 1:
            newNode.next = self.head
            self.head = newNode

        else:
            if pos == self.nodeCount + 1:
                prev = self.tail
            else:
                prev = self.getAt(pos - 1)
            newNode.next = prev.next
            prev.next = newNode

        if pos == self.nodeCount + 1:
            self.tail = newNode

        self.nodeCount += 1
        return True


    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount: #제거할 위치의 node가 리스트에서 벗어나는 인덱스를 가질 때
            raise IndexError 

        if pos == 1: #제거할 노드가 첫번째 노드인 경우
            if self.nodeCount == 1: #제거할 노드가 포함 된 리스트의 노드 개수가 한 개인 경우
                curr = self.head # 첫번째이므로 제거할 위치의 노드는 헤드랑 같음
                self.head = None #제거했으므로 head, tail 없어짐.
                self.tail = None

            else: #제거할 노드가 포함 된 리스트의 노드 개수가 한 개가 아닌 경우
                curr = self.head # 첫번째이므로 제거할 위치의 노드는 헤드랑 같음
                self.head = curr.next #그 다음을 가리키는 curr.next는 이제 head를 가리키게 되어야함.
        
        else: #첫번째 노드가 아닌 경우
            prev = self.getAt(pos - 1) #pos의 전의 위치의 노드
            curr = prev.next #pop작업
            if pos == self.nodeCount: #마지막 인 경우
                prev.next = None
                self.tail = prev
            else:
                prev.next = curr.next

        self.nodeCount -= 1
        return curr.data


    def traverse(self):
        result = []
        curr = self.head
        while curr is not None:
            result.append(curr.data)
            curr = curr.next
        return result


def solution(x):
    return 0
