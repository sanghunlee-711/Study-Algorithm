description ="""
문제 설명
소괄호: ( )
중괄호: { }
대괄호: [ ]
를 포함할 수 있는 수식을 표현한 문자열 expr 이 인자로 주어질 때, 이 수식의 괄호가 올바르게 여닫혀 있는지를 판단하는 함수 solution() 을 완성하세요. 
이 함수는 수식의 괄호가 유효하면 True 를, 그렇지 않으면 False 를 리턴합니다.

스택을 활용하여 수식 내의 괄호 여닫음의 유효성을 검사하는 알고리즘에 대해서는 동영상 강의 내용을 참고하세요.
"""

class ArrayStack:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def push(self, item):
        self.data.append(item)

    def pop(self):
        return self.data.pop()

    def peek(self):
        return self.data[-1]


def solution(expr):
    match = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    S = ArrayStack()
    for c in expr:
        if c in '({[':            
          S.push(c)

        elif c in match:
            if S.isEmpty():
                return False
            else:
              t = S.pop()
              if  t != match[c]:
                return False
    return S.isEmpty()
