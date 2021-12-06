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


def splitTokens(exprStr):
    tokens = []
    val = 0
    valProcessing = False
    for c in exprStr:
        if c == ' ':
            continue
        if c in '0123456789':
            val = val * 10 + int(c)
            valProcessing = True
        else:
            if valProcessing:
                tokens.append(val)
                val = 0
            valProcessing = False
            tokens.append(c)
    if valProcessing:
        tokens.append(val)

    return tokens


def infixToPostfix(tokenList): #12-2 solution.py참고
  #중위 -> 후위
    prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    }

    opStack = ArrayStack()
    postfixList = []

    for t in tokenList:
        if t == ")":
            while opStack.peek() != '(':
                postfixList.append(opStack.pop())
            opStack.pop()
        elif t in prec:
            if t == "(" or opStack.isEmpty():
                opStack.push(t)
            else:
                while prec[opStack.peek()] >= prec[t]:
                    postfixList.append(opStack.pop())

                    if opStack.isEmpty():
                        break
                opStack.push(t)
        else:
            postfixList.append(t)

    while not opStack.isEmpty():
            postfixList.append(opStack.pop())

    return postfixList


def postfixEval(tokenList):
  #후위 -> 중위
    opStack = ArrayStack()
    val = 0
    for t in tokenList: #반복문 시작
        if type(t) == int:  #숫자타입 여부 확인
            opStack.push(t) #숫자 타입(피연산자)인 경우 스택에 넣음
        else: #숫자타입이 아닌(연산자)인 경우
            t2 = opStack.pop() #스택에서 두개를 꺼냄 나누기와 빼기는 순서가 중요하므로 다른 변수명
            t1 = opStack.pop()

            if t == '+':
                val = t1+t2
            elif t == '-': 
                val= t1-t2
            elif t == '*': 
                val= t1*t2
            elif t == '/': 
                val= t1/t2

            opStack.push(val) #계산완료된 것을 다시 넣어줌
            val = 0 #계산 값 임의 배정을 위한 변수는 0으로 세팅
    val = opStack.pop() #반복문 종료 후 Stack내에 계산완료된 값 주입
    return val
            


def solution(expr):
    tokens = splitTokens(expr)
    postfix = infixToPostfix(tokens)
    val = postfixEval(postfix)
    return val
