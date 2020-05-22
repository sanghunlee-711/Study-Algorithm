"""
n = int(input())

for i in range(n+1 , 0, -1):
    print('*' * (n+1-i))
for j in range(1, n+1, 1):
    print('*' * (n))    


case = int(input())

for j in range(case-1, 0, -1):
    print(" "*(j-case),'*'*(2*j-1))
for i in range(1, case +1 ,1):
    print('*'*(2*i-1))

"""


case = int(input())

for j in range(case, 1, -1):
    print(" "*(case-j) +'*'*(2*j-1))
for i in range(1, case +1 ,1):
    print(" "*(case-i) +'*'*(2*i-1))
