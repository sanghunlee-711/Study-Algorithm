
"""
def plus(0 < a,b < 10):
    return a + b
print(1 , 2)
얘도 출력 잘되는데 후... 공부하자...
"""
"""
입력:
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
출력:
첫째 줄에 A+B를 출력한다.
"""
a, b = input().split()
print(int(a) + int(b))


"""
a, b = input().split() 에서 split으로 두자리수 또는 음수가 입력되지 않는 조건이 됨.
print(int(a)+int(b))로 자료형 출력 
