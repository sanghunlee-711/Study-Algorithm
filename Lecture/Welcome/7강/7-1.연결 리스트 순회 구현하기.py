
class Node:
    def __init__(self, item):
        self.data = item
        self.next = None

class LinkedList:
    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None

    def getAt(self, pos): #특정 원소 참조(k 번째)
        if pos < 1 or pos > self.nodeCount:
            return None
        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1
        return curr

    def traverse(self): # 리스트 순회
        answer = []
        curr = self.head #헤드 지정
        if curr == None: # tail인 경우 처리
            return answer
        
        while curr != None:
            answer.append(curr.data) #데이터 answer에 주입
            curr = curr.next # 연결 재 지정
        
        return answer


# 이 solution 함수는 그대로 두어야 합니다.
def solution(x):
    return 0
