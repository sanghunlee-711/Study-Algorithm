
"""
26
2 + 6 = 8
68 
6 + 8 = 14
84
8 + 4 = 12
42
4 + 2 = 6
26
-> length of cycle - > 4
"""

"""
1st trial
while True:
  try:
    a = list(map(int,input().split))
    
  except:
    a    
"""

#% 와 //을 사용 할 수 있다는 생각을 안한체 list로 뽑아서 더하는것을 반복하려함.

n = num = int(input()) # 들어갈 수 설정
count = 0 # cycle  횟수 설정
while True:
  ten = n // 10 # 몫의 값 input의 첫번째 순서 값
  one = n % 10 # 나머지의 값 input의 두번째 순서 값
  total = ten + one
  count += 1
  n = int(str(one)+ str(total % 10))
  if(num == n):
    break
print(count)