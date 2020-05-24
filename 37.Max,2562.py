list = []
for i in range(9):
    list.append(int(input()))

print(max(list))
print(list.index(max(list))+1)

"""
list에 추가하는 것 입력을 받기위해 append()사용
list 변수로 빈 리스트를 정의함. 반복문을 통해 9 번 입력받음
최대값출력
.index를 붙여 몇번째 값인지 출력받음(0부터 시작이니 +1)