"""
문제
input->3
output: 아래와 같음
*
**
***
**
*
"""

case = int(input())

for i in range(1, case +1 ,1):
    print('*'*i)
for j in range(case-1, 0, -1):
    print('*'*j)