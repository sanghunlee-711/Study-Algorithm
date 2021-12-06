# -*-coding:utf-8-*-

def linear_search(L,x):
  i = 0
  while i < len(L) and L[i] !=x:
    i += 1
  if  i < len(L):
    return i
  else:
    return -1

S = [3,8,2,7,6,10,9]
print(linear_search(S,6))
print(S.index(6))
print(linear_search(S,1))
print(S.index(1))
