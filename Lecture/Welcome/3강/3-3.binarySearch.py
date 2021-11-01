# -*-coding:utf-8-*-
description = """
  이진탐색(Binary Search)
    - 탐색하려는 리스트가 이미 정렬되어 있는 경우에만 적용 가능
    - 크기순으로 정렬되어 있다는 성질을 이용
    - 반씩 쪼개서  찾게 되는 로직
    - 한 번 비교가 일어날 때마다 리스트를 반씩 줄임(divide & conquer)
    -> O(logn)
"""

L = []
target = 'test'
lower = 0
upper = len(L) -1
idx = -1 #원소가 발견될 위치의 초기값

while lower <= upper:
  middle = (lower + upper) // 2
  if L[middle] == target:
    print(target)
  elif L[middle] < target:
    print("lower업데이트")
  else:
    print("upper업데이트")
    

#이진탐색 구현
def solution(L, x):
    lower = 0
    upper = len(L) - 1
    idx = -1
    
    while lower <= upper:
        middle = (lower+upper) // 2
        if upper == lower:
            idx = -1
            break
        if L[lower] == x:
            idx = lower
            break
        elif L[upper] == x:
            idx = upper
            break    
        elif L[middle] == x:
            idx = middle
            break  
        elif L[middle] < x:
            lower = middle + 1
        else:
            upper = middle - 1
            
    return idx

print(solution([2, 5, 7, 9, 11], 4))


def solution(L, x, l, u):
    if l > u:
        return -1
    mid = (l + u) // 2
    if x == L[mid]:
        return mid
    elif x < L[mid]:
        return solution(L, x, l, mid-1)
    else:
        return solution(L, x, mid+1, u)