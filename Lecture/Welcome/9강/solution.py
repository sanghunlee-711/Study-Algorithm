class Node:

    def __init__(self, item):
        self.data = item
        self.next = None


class LinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None)
        self.tail = None
        self.head.next = self.tail


    def traverse(self):
        result = []
        curr = self.head
        while curr.next:
            curr = curr.next
            result.append(curr.data)
        return result


    def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None

        i = 0
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1

        return curr


    def insertAfter(self, prev, newNode):
        newNode.next = prev.next
        if prev.next is None:
            self.tail = newNode
        prev.next = newNode
        self.nodeCount += 1
        return True


    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos - 1)
        return self.insertAfter(prev, newNode)


    def popAfter(self, prev):
        #pop할 녀석 curr로 지정
        curr = prev.next
        
        #마지막인 경우
        if curr.next is None:
            #마지막인데 리스트 길이가 하나인 경우
            if self.nodeCount == 1:
                #node가 리스트 내부에 없으므로 모두 None설정
                self.tail = None
                prev.next = None
            #curr이 마지막이며 리스트 길이가 1개를 넘어서는 경우
            else:
                self.tail = prev
                prev.next = None
        #그게 아니면 그냥 Pop    
        else:
            prev.next = curr.next
                
        #개수 줄이기
        self.nodeCount -= 1
        return curr.data
        
    def popAt(self, pos):
      #범위를 넘어서는 경우 헤드에 더미노드가 있으므로 0 으로 가능
        if pos < 0 or pos > self.nodeCount:
            raise IndexError
            
        prev = self.getAt(pos-1)
        
        return self.popAfter(prev)
        
            
          
def solution(x):
    return 0
