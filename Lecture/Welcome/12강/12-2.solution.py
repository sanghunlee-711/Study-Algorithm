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
    i = 0
    for s in S:
        if s == ")" and not opStack.isEmpty():
            print(".")
            newS = opStack.pop()
            while newS == '(':                    
                    answer += newS 
        
        if s in prec:
            if prec[s] > prec[opStack.peek()] :
                opStack.push(s)
            else:                
                newS = opStack.pop()
                answer += newS 
                opStack.push(s)
        else:
            answer = answer + s
    
    
        while not opStack.isEmpty():
            answer += opStack.pop()
    
    return answer
