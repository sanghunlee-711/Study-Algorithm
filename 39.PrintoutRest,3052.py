number_list = []

for i in range(0,10,1):
  number = int(input())
  number_list.append(number % 42)
number_list = set(number_list)
print(len(number_list))

#set은 집합자료형임, 중복제거를 위한 필터역할.

