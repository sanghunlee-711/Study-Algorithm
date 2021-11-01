# f0 = 0, f1 =1, fn = fn-1 + fn-2, n >=2
# iterative, recursive version 

def recursive(x):
  if x <= 1: return x
  if x > 1:
    return recursive(x-1) + recursive(x-2) 

a = int(input("Number: "))
print(recursive(a))

def iterative(x):
  if x < 2: return x
  else:
    a, b = 0, 1
    for i in range(2, x+1):
      print(a, b, next)
      next = b
      b = a + b
      a = next
    return b


b = int(input("Number: "))
print(iterative(b))
