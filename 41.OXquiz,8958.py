"""
#출력초과본
n = int(input())
for i in range(n):
  a = input()
  score = 0
  count = 0
  for j in range(len(a)):
    if a[i] == 'O':
      count += 1
      score += count
    elif a[i] =='X':
        score +=0
        count = 0
print(score)
"""
#Answer
n = int(input())
for i in range(n):
  a = input()
  score = 0
  count = 0
  for j in a:
    if j == 'O':
      score += 1
    else:
        score = 0
    count += score
  print(count)