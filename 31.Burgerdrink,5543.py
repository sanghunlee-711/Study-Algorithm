"""
800
700
900
198
330

848
1. how to printout minimum value -> min()
2. plus min(a) with min(b) -50 -> printout
"""

"""
a = [0]*3
b = [0]*2
for i in range(3):
  a[i] = int(input())
for i in range(2):  
  b[i] = int(input())
cheap = min(a[i])+min(b[i])-50 #list화 한것이라 str인데 min값 사용하려하니 안된것같음 아닌가 뭐지..
print(cheap)
"""


burger = []
drink = []
for i in range(3):
    temp = int(input())
    burger.append(temp)
for i in range(2):
    temp = int(input())
    drink.append(temp)

cheap = min(burger) + min(drink) - 50
print(cheap)

