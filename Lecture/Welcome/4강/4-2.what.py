
#factorial example
def what(n):
  if n <=1 :
    return 1
  else:
    return n*what(n-1)
