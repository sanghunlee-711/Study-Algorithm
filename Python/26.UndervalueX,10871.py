N, X = map(int,input().split())
a = list(map(int,input().split()))

for i in range(N):
    if (a[i] < X):
        print(a[i], end=" ")

"""
10 5
1 10 4 9 2 3 8 5 7 6
list의 활용 및 list 활용시 a[i]설정 기억하기
"""