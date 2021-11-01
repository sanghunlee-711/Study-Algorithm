# -*-coding:utf-8-*-
def binSearch(L, x, lower, upper):
  if "sth": #lower , upper 조건에 따라 만들어지는 조건일 듯
    return -1
  mid = (lower+upper)//2

  if x == L[mid]:
    return mid
  
  elif x < L[mid]:
    return # 중간보다 입력값이 작은경우 자기 자신을 호출하는 조건
  
  else:
    return # 중간보다 입력값이 큰 경우 자기 자신을 호출하는 조건

L = [1,2,4]
a = 0

print(a not in L)

#아래는 개인 풀이

def solution(L, x, l, u):
  #처음에는 여기서 not in 을 사용하여 유무를 판단하려 했으나 js의 find와 같이 사용할 경우
  # 배열을 처음부터 하나씩 다 읽으므로 재귀함수를 사용하는 메리트가 사라짐 (복잡도가 배열길이만큼 늘어나게됨(곱))
    if l > u:
        return -1
    mid = (l + u) // 2
    if x == L[mid]:
        return mid
    elif x < L[mid]:
        return solution(L, x, l, mid-1) #여기서도 마찬가지로 리스트 슬라이싱을 통해서 배열크기를 줄이려했으나 하는 경우 배열의 크기 반만큼 복잡도가 증가하여 효율성이 떨어지게됨.
    else:
        return solution(L, x, mid+1, u)
