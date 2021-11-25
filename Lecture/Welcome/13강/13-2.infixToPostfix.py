#중위 표기법을 후위 표기법으로 변경
# 이전에는 문자열이였으나 이번에는 리스트로 들어올 것임

def infixToPostfix(tokenList):
  prec = {
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    '(': 1,
  }

  opStack = Stack()
  postfixList = []

  for token in tokenList:
    if type(token) is int:
      pass
    elif token == "(":
      pass
    elif token == ")":
      pass
    else:
      pass

    while not opStack.isEmpty():
      pass
    return postfixList
