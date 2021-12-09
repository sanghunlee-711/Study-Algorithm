class Node:
  def __init__(self,key, data):
    self.key = key
    self.data = data #이번에는 데이터를 가지는 노드로 만들 것이므로 이렇게 생성
    self.left = None
    self.right = None

  def inorder(self):
    traversal = []
    if self.left:
      traversal += self.left.inorder()
    traversal.append(self) #노드들의 리스트를 만들어서 리턴해준다.
    if self.right:
        traversal += self.right.inorder()
    return traversal
  
  def min(self):
    if self.left:
      return self.left.min()
    else:
      self
  
  def max(self):
    if self.right:
      return self.right.max()
    else:
      self

  def lookup(self, key, parent=None):
    if  key < self.key: #ke가 현재보다 작으면 왼쪽으로 감
      if self.left:
        return self.left.lookup(key,self) #self.node의 parent는 self 이므로 parent로 Self를 넘김
      else:
        return None,None
      
    elif  key > self.key:
      if self.right:
        return self.right.lookup(key, self)
      else:
              return None, None
    else: #찾으려는 노드 발견
      return self,parent #slef -> 찾아진 노드 , parent가 Parent이므로 그대로 리턴

  def insert(self, key, data):
    if key < self.key: #작으면 왼쪽으로 가고 insert메서드 재귀적으로 호출하거나 왼쪽 또는 오른쪽 서브트리가 없으면 삽입해야할 위치를 발견한 것이므로 새로운 노드를 만들어 달아주면 됨.
      pass
    elif key > self.key:
      pass
    else:
      raise KeyError('...')


class BinSearchTree:
  def __init__(self):
    self.root = None
  
  def inorder(self):
    if self.root:
      return self.root.inorder()
    else:
      return []

  def min(self):
    if self.root:
      return self.root.min()
    else:
      return None
  
  def max(self):
    if self.root:
      return self.root.max()
    else:
      return None

  def lookup(self,key): #입력인자: 찾으려는 대상 키, 리턴: 찾은 노드와 그것의 부모노드(왜? -> 원소삭제에서 알 필요가 있음) 없으면 각 각 None
    if self.root:
      return self.root.lookup(key)
    else:
      return None, None
    
  def insert(self, key, data): #key ,data를 입력인자로 받고 
    if self.root: 
      self.root.insert(key, data) #존재하는 데이터면 재귀적으로 Node에 추가하자
    else:
      self.root = Node(key, data) #없으면 이제 새로운 노드를 만들어서 루트로 만들어줌
    
