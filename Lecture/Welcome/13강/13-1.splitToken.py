# 수와 연산자를 분리하여 계산하기 위한 예제
# exprStr 는 중위표기법으로 된 숫자 식이다

def splitToken(exprStr):
  tokens = []
  val = 0 #수를 만났을 때 값을 넣기 위함
  valProcessing = False
  for c in exprStr:
    if c == ' ': #빈칸 넘어감
      continue
    if c in '0123456789': #수가 들어있으면
      val = val * 10 + int(c) #그 전의 값에 10을 곱해주고 십진수로 만들거임 
      valProcessing = True 
    else: #괄호 또는 연산자를 만났다고 가정
      if valProcessing: #십진수를 표현하고 있었다면 지금까지 계산한 값을 toekn에 넣어줌
        tokens.append(val)
        val = 0
      valProcessing = False
      tokens.append(c) #괄호또는 연산자를 token 리스트에 붙임
    
    if valProcessing:
      tokens.append(val)
    return tokens
