a = [0]*5 #list화 함

for i in range(5):
    a[i] = int(input()) #list화 된 곳에 input할당

    if a[i] < 40: #문제조건 적용
        a[i]= 40

avg = sum(a)/5  #평균값 이런식으로 가능함 알고있자!
print(int(avg)) #출력

#언제쯤 구글링 없이 풀어내려나 ..
