class MaxHeap:

    def __init__(self):
        self.data = [None]

    def insert(self,item):
      self.data.append(item) #일단 마지막에 넣기
      i = len(self.data) - 1 #마지막 녀석
      while i > 1: #0은 None이므로
        if  self.data[i] > self.data[i//2]: #넣으려는 아이템이 부모보다 큰 경우
          self.data[i], self.data[i//2] = self.data[i//2], self.data[i] # 부모와 위치 변경
          i = i //2 #부모와 위치 바꾼후 부모인덱스로 다시 넘어가서 비교
        else:
          break

    def remove(self):
      if len(self.data) > 1:
        self.data[1],self.data[-1] = self.data[-1], self.data[1] #1은 루트 노드, -1은 제일 마지막 노드
        data = self.data.pop(-1) #루트노드에서 바꿔치기 해서 제일 마지막으로 간(원래 루트노드에 있던 친구를 Pop)
        self.maxHeapify(1) #recursive하게 힙구조를 만들어주는 메서드를 별도 생성(1은 루트노드부터 시작해야하기에 인자로 넣어준것.)
      else:
        data = None
      return data

    def maxHeapify(self, i):
        # 왼쪽 자식 (left child) 의 인덱스를 계산합니다.
        left = 2*i
        # 오른쪽 자식 (right child) 의 인덱스를 계산합니다.
        right = 2*i+1
        smallest = i
        # 왼쪽 자식이 존재하는지, 그리고 왼쪽 자식의 (키) 값이 (무엇보다?) 더 큰지를 판단합니다.
        if  left < len(self.data) and self.data[left] > self.data[i]:
          # "왼쪽 자식이 존재하는지" 를 검사하는 것은 self.data[left] 가 아니라 이 자식 노드가 (존재한다면) 가질 인덱스의 값 (left) 이 특정 범위 내에 있어야 함을 조건으로 해야 합니다. 
          # (어떤 조건식을 써야 할까요?) "오른쪽 자식이 존재하는지" 에 대해서도 마찬가지입니다. -> 이래서 len을 통해서 전체 힙 크기보다 작은지를 확인함.
            # 조건이 만족하는 경우, smallest 는 왼쪽 자식의 인덱스를 가집니다.
            smallest = left

        # 오른쪽 자식이 존재하는지, 그리고 오른쪽 자식의 (키) 값이 (무엇보다?) 더 큰지를 판단합니다.
        if right < len(self.data) and self.data[right] > self.data[i]:
            # 조건이 만족하는 경우, smallest 는 오른쪽 자식의 인덱스를 가집니다.
            smallest = right
        if smallest != i:
            # 현재 노드 (인덱스 i) 와 최댓값 노드 (왼쪽 아니면 오른쪽 자식) 를 교체합니다.
            self.data[i],self.data[smallest] = self.data[smallest],self.data[i]

            # 재귀적 호출을 이용하여 최대 힙의 성질을 만족할 때까지 트리를 정리합니다.
            self.maxHeapify(smallest)


def solution(x):
    return 0

def heapsort(unsorted):
  H = MaxHeap()
  for item in unsorted:
    H.insert(item)
  sorted = []
  d = H.remove()
  while d:
    sorted.append(d)
    d=H.remove()

  return sorted



