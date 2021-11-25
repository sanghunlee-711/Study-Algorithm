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
        

        if s == ")" : 
            while opStack.peek() != "(":
                answer += opStack.pop()
            opStack.pop()
        elif s in prec:
            if s == "(" or opStack.isEmpty():
                opStack.push(s)
            
            else:
                while prec[opStack.peek()] >= prec[s]:
                    answer += opStack.pop()
                    if opStack.isEmpty():
                        break
                opStack.push(s)


        else:
            answer = answer + s
    
    
    while not opStack.isEmpty():
        answer += opStack.pop()
    
    return answer
