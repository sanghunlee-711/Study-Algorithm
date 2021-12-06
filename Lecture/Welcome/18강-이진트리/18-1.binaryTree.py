class Node:
  def __init__(self, item):
    self.data = item
    self.left = None
    self.right = None
  
  def size(self):
    l = self.left.size() if self.left else 0
    r = self.right.size() if self.right else 0
    return l+r+1
  
  def depth(self):
      l = self.left.depth() if self.left else 0
      r = self.right.depth() if self.right else 0
      return l+1 if l > r  else r+1
  
  def inorder(self):
    traversal = []
    if self.left:
      traversal += self.left.inorder()
    traversal.append(self.data)
    if self.right:
      traversal += self.right.inorder()
    return traversal
  
  def preorder(self):
    traversal = []
    traversal.append(self.data)
    if self.left:
      traversal += self.left.preorder()
    if self.right:
      traversal = self.right.preorder()
    return traversal

class BinaryTree:
  def __init__(self,r):
    self.root = r #root가 어딘지만 지정 해주면 어차피 Node에서 이미 간선(left, right)이 정해져있기 때문에 다 정의가 된다.

  def size(self):
    if self.root:
      return self.root.size()
    else:
      return 0

  def depth(self):
      if self.root:
          return self.root.depth()
      else:
          return 0
  
  def inorder(self):
    if self.root:
      return self.root.inorder()
    else:
      return []

  def preorder(self):
    if self.root:
      return self.root.preorder()
    else:
      return []
