"""
나는 그냥 중학 수학공식을 넣어버림
n = int(input())

print("%d" %(n*(n+1)/2))

프로그래머는 for i in range를 잘 쓰는구나 ..
변수설정 또한 중요함.
"""

n = int(input())
sum = 0
for i in range(n+1):
    sum = sum + i
print(sum)