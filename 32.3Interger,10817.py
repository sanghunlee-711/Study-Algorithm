# 처음생각은 min max 구해서 다 빼는것.
# 2번째는 분명히 관련함수가 있을 것이라 생각함.
# 알고보니 sorted함수가 있네 ?


interger = list(input().split())

for i in range(len(interger)):
  interger[i] = int(interger[i])
sorted_list = sorted(interger, reverse= True)
print(sorted_list[1])