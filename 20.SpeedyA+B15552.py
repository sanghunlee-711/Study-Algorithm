import sys

i = int(input())

for i in range(i):
    a , b = map(int, sys.stdin.readline().split())
    print(a + b)


"""
input 대신에 요구하는 sys를 import해와서 sys.stdin.readline()을
적용할 수 있는지를 확인하는 문제임
나머지는 18번째로 푼 문제와 동일함.
"""