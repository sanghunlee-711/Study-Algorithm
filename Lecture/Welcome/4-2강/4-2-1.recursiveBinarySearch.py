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
