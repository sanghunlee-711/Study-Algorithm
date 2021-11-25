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

prec = {
    '*': 3, '/': 3,
    '+': 2, '-': 2,
    '(': 1
}

def solution(S):
    answer = ""
    opStack = ArrayStack()

    for s in S:
        if s == ")" :  #닫는 괄호인 경우 처리
            while opStack.peek() != "(": #처음 열리는 괄호가 나올때 까지
                answer += opStack.pop() #pop해서 답변에 붙여줌
            opStack.pop() #들어가있는 '(' 괄호 처리를 위한 pop
        elif s in prec: # 연산자인 경우
            if s == "(" or opStack.isEmpty(): # 처음 열리는 괄호 또는 stack이 비어있는 경우 그냥 push
                opStack.push(s)
            
            else: # 나머지의 케이스에서는 stack에 들어있는것과 현재 읽은 연산자의 우선순위 비교 필요
                while prec[opStack.peek()] >= prec[s]: 
                    #현재 선택한 연산자가 스택에 잇는 최상단의 연산자와 우선순위 비교 시 더 작은 경우
                    #  pop을 계속 실행하여 스택의 최상단의 우선순위가 현재 연산자보다 크거나 같아질 경우 까지
                    answer += opStack.pop() #stack내부의 연산자를 answer에 붙임
                    if opStack.isEmpty(): #비는 경우 처리
                        break
                opStack.push(s) #while문 실행 뒤 push[현재 읽은 연산자가 최상단의 연산자와의 우선순위 비교시 더 큰 경우]
        else: #연산자가 아닌 문자열인 경우 그냥붙여줌
            answer +=  s
    
    
    while not opStack.isEmpty(): # 문자열 회문이 끝난 뒤에도 opStack에 연산자가 남아있다면 다 붙이기
        answer += opStack.pop()
    
    return answer
