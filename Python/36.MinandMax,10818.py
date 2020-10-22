n = int(input())
a = list(map(int, input().split()))

print(min(a), max(a))

#너무 쉽게 맞아버려서 당황 ..;;

"""
n = int(input())
a= list(map(int,input().split()))
print('{}{}'.format(min(a), max(a)))

로도 많이들 푸심
'{}{}'.format은 뭐지 ..? 찾아보자

ex)
number = 20
welcome ='환영합니다'
base = '{}번 손님{}'
print(number, '번 손님', welcome)
print(base.format(number,welcome))
print('{}번 손님{}'.format(number,welcome))
모두 20번손님 환영합니다로 출력됨.
{}는 변수가 들어갈 곳이다 끗.
base.format은 format기능이 base에 속해있다는 의미
출처:프로그래머스 파이썬입문강의