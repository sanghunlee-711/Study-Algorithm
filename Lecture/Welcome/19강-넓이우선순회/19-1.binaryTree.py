class ArrayQueue:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def enqueue(self, item):
        self.data.append(item)

    def dequeue(self):
        return self.data.pop(0)

    def peek(self):
        return self.data[0]


class Node:

    def __init__(self, item):
        self.data = item
        self.left = None
        self.right = None


class BinaryTree:

    def __init__(self, r):
        self.root = r
        

    def bft(self):
        traversal = [] #방문기록을 위한 리스트
        q = ArrayQueue() #방문할 노드들을 순서대로 넣기위한 큐
        if self.root == None: #루트노드가 없으면 방문할게 없음
            return traversal
        
        else: #루트 노드 존재 시 루트노드부터(수준이 낮은 것 부터)
            q.enqueue(self.root)
        
        while not q.isEmpty(): #방문할 노드들이 없어질때 까지 진행
            out = q.dequeue() 
            traversal.append(out.data) #탐색 완료
            
            if out.left and out.right: #양쪽 자식노드 존재시
                q.enqueue(out.left) #왼쪽이 우선
                q.enqueue(out.right)
                continue
            
            elif out.left:
                q.enqueue(out.left)
                
            elif out.right:
                q.enqueue(out.right)
        
        return traversal


def solution(x):
    return 0
