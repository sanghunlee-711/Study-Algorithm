# -*-coding:utf-8-*-
class Node:
  def __init__(self, item):
    self.data = item
    self.next = None


class LinkedList:

  def __init__(self):
    self.nodeCount = 0
    self.head = None
    self.tail = None

  def __repr__(self): #프린트 시 무슨 문자 나오게 할 건지 정의용
    if self.nodeCount == 0:
      return "LinkedList: Empty"
    
    s=""
    curr = self.head
    while curr is not None:
      s += repr(curr.data)
      if curr.next is not None:
        s += '->'
      curr = curr.next
    return s

  def getAt(self,pos):
    if pos <=0 or pos > self.nodeCount:
        return None

    i = 1
    curr = self.head
    while i < pos:
        curr = curr.next
        i+=1
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
          prev = self.getAt(pos-1)
      newNode.next = prev.next
      prev.next = newNode

    if pos == self.nodeCount + 1:
      self.tail = newNode

    self.nodeCount += 1
    return True

