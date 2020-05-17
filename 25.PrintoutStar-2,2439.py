a = int(input())

for i in range(1, a+1, 1):
    print(' '*(a-i), end="")
    print('*'*i)

# end의 사용을 통해 끊어주는 것이 출력형식 오류를 막는방법
#for i in rane(start, end, interval(or distance))