
"""
문제:
시험 점수를 입력받아 90 ~ 100점은 A,
 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D,
 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
"""
"""
포함을 안시킴 >=이렇게
a = int(input())


if(90 < a < 100):
    print('A')
elif(80 < a < 89):
    print('B')
elif(70 < a < 79):
    print('C')
elif(60 < a < 69):
    print('D')
else:
    print('F')
"""
score = int(input()) # int함수 사용하면 정수형 자료형으로 변형하는 거라고!

if score >= 90
    print('A')
elif score >= 80
    print('B')
elif score >= 70
    print('C')
elif score >= 60
    print('D')
else:
    print('F')