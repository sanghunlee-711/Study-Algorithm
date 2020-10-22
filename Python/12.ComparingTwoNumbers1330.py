a, b = map(int, input().split())

if a > b:
    print('>')
elif a < b:
    print('<')
else:
    print('=')

"""
map(f,iterable)로 map함수는 함수(f)와 반복가능한(iterable)자료형을입력으로 받는다
여기서는 f가 없는건가. iterable 자료형은 input().split()이다.
여튼 각 요소가 수행한 결과를 '묶어서' 출력해주는것이 주요하다.
"""
# 예제는 추후 활용해보는걸로 지금 KTX안임 :(