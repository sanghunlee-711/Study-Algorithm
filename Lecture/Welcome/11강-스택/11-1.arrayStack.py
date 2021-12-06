# -*- coding: utf-8 -*-




class ArrayStack:

	def __init__(self):
		self.data = [] #빈 스택을 초기화

	def size(self): # 스택의 크기를 리턴
		return len(self.data)

	def isEmpty(self): #스택이 비어있는지 판단
		return self.size() == 0

	def push(self, item): #데이터 원소를 추가
		self.data.append(item)

 	def pop(self): #데이터 원소를 삭제 및 리턴
		return self.data.pop()

	def peek(self): #스택의 꼭대기 원소 반환(제일 마지막 원소 반환)
		return self.data[-1]


# from doublylinkedlist import Node
# from doublylinkedlist import DoublyLinkedList

class LinkedListStack:

	def __init__(self):
		self.data = DoublyLinkedList() #비어있는 양방향 링크드 리스트로 초기화 함(배열 초기화랑 비슷)

	def size(self): # getLength활용
		return self.data.getLength()

	def isEmpty(self):
		return self.size() == 0

	def push(self, item):
		node = Node(item) #인자로 주어진 아이템을 item을 원소로 한 새로운 Node를 만듦
		self.data.insertAt(self.size() + 1, node) #사이즈를 한개 늘리고 마지막에 넣어줌

	def pop(self):
		return self.data.popAt(self.size())  #현재  리스트의 노드 개수를 구하여 제일 마지막 노드를 pop시킴

	def peek(self):
		return self.data.getAt(self.size()).data
