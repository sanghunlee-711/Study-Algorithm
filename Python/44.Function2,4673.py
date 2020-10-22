def selfnumber(n):
    a = 0
    for x in list(str(n)): 
        a = a + int(x)
    return int(n) + a

a = []

for i in range(1, 10001):
    k = selfnumber(i)
    a.append(k)

for j in range(1, 10001):
    if j in a:
        pass
    else:
        print(j)
"""
Source: https://claude-u.tistory.com/33
다양한 분들이 함수 없이 if, elif 문으로만 푸셔서
함수로 푼 답안을 찾아보았다.
문제를 봤을때 for를 쓰겠구나 .. array를 하겟구나 까지만 가고
작성을 못했다[사실 하기너무 싫었다 오늘]
여튼 끗

"""