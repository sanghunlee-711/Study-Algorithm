"""
1st trial
while True:
  a, b = map(int,input().split())
  print(a + b)
if a == 0 and b == 0:
  break
"""


while True:
  a, b = map(int,input().split()) # input 조건
  if a == 0 and b == 0: # break 조건
    break # break 조건 까지는 계속 input되는 것임.
  print(a + b) #출력함수