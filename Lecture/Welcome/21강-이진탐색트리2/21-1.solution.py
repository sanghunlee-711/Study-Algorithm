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


  #작으면 왼쪽으로 가고 insert메서드 재귀적으로 호출하거나 왼쪽 또는 오른쪽 서브트리가 없으면 삽입해야할 위치를 발견한 것이므로 새로운 노드를 만들어 달아주면 됨.
  def insert(self, key, data):
      if key < self.key: 
          #현재 노드보다 가지고 있는데이터가 작은 경우 -> 왼쪽으로 가야하는 케이스인  경우
          if self.left:
              return self.left.insert(key, data)
          else:
            self.left = Node(key,data)
      elif key > self.key:
          if self.right:
              return self.right.insert(key,data)
          else:
            self.right = Node(key,data)
      else:
          raise KeyError('중복된 키에러 발생')

  def countChildren(self): #노드의 자식 개수 세기
    count = 0
    if self.left:
      count += 1
    if self.right:
      count += 1
    return count

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
  
  def remove(self, key):
      node, parent = self.lookup(key) #여기서 node가 지울애이고 parent가 그 부모노드
      if node:
          nChildren = node.countChildren()
          # The simplest case of no children
          if nChildren == 0:
              # 만약 parent 가 있으면
              # node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여
              # parent.left 또는 parent.right 를 None 으로 하여
              # leaf node 였던 자식을 트리에서 끊어내어 없앱니다.
              if parent:
                  if parent.left == node:
                      parent.left = None
                  else:
                      parent.right = None
              # 만약 parent 가 없으면 (node 는 root 인 경우)
              # self.root 를 None 으로 하여 빈 트리로 만듭니다.
              else:
                  self.root = None
          # When the node has only one child
          elif nChildren == 1:
              # 하나 있는 자식이 왼쪽인지 오른쪽인지를 판단하여
              # 그 자식을 어떤 변수가 가리키도록 합니다.
              child = None
              if node.left:
                  child = node.left
              else:
                  child = node.right
              # 만약 parent 가 있으면
              # node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여
              # 위에서 가리킨 자식을 대신 node 의 자리에 넣습니다.
              if parent:
                  if parent.left == node:
                      parent.left = child
                  else:
                      parent.right = child
              # 만약 parent 가 없으면 (node 는 root 인 경우)
              # self.root 에 위에서 가리킨 자식을 대신 넣습니다.
              else:
                  self.root = child
          # When the node has both left and right children
          else:
              # parent 는 node 를 가리키고 있고,
              # successor 는 node 의 오른쪽 자식을 가리키고 있으므로
              parent = node
              successor = node.right

              # successor 로부터 왼쪽 자식의 링크를 반복하여 따라감으로써
              # 순환문이 종료할 때 successor 는 바로 다음 키를 가진 노드를,
              # 그리고 parent 는 그 노드의 부모 노드를 가리키도록 찾아냅니다.
              # 하나 큰 키의 노드를 찾기 위해서는 삭제하려는 노드의 오른쪽 노드로 가서
              # 제일 왼쪽 노드까지 반복하게 되면 찾을 수 있게 되는 구조가 이진탐색트리임.
              while successor.left:
                  parent = successor
                  successor = successor.left
                  
              # 삭제하려는 노드인 node 에 successor 의 key 와 data 를 대입합니다.
              node.key = successor.key
              node.data = successor.data
              # 이제, successor 가 parent 의 왼쪽 자식인지 오른쪽 자식인지를 판단하여
              # 그에 따라 parent.left 또는 parent.right 를
              # successor 가 가지고 있던 (없을 수도 있지만) 자식을 가리키도록 합니다.
              if parent.left == successor:
                  parent.left = successor.right #successor는 애초에 오른쪽에 값이 할당되어있는놈이므로
              else:
                  parent.right = successor.right

          return True

      else:
          return False


