class MaxHeap:
  def __init__(self):
    self.data = [None] #영번 인덱스는 버리기로 했으므로 None주입
  
  def insert(self,item):
    self.data.append(item) #일단 마지막에 넣기
    i = len(self.data) - 1 #마지막 녀석
    while i > 1: #0은 None이므로
      if  self.data[i] > self.data[i//2]: #넣으려는 아이템이 부모보다 큰 경우
        self.data[i], self.data[i//2] = self.data[i//2], self.data[i] # 부모와 위치 변경
        i = i //2 #부모와 위치 바꾼후 부모인덱스로 다시 넘어가서 비교
      else:
        break


