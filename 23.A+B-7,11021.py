"""
Wronganswer that first trial

cases = int(input())
a = int(input())
b = int(input())

for i in range(cases)
    print("Case #i:", "a + b")
"""
#Answer
cases = int(input())

for i in range(cases):
    a, b = input().split()
    print("Case #%d:" % int(i+1), (int(a)+int(b)))

#print의 설정에 따른 출력 방법 익히기
#for 함수 안에서도 a, b 변수 설정 가능한 것 인지하기