a = int(input().split())

for i in range(1, 10):
   print(a, "*" , "=", a * i)
#그냥 직관적으로 프린트 시킴


a = int(input())
for i in range(1, 10):
    print("%d * %d = %d" %(a,i,(a * i)))
#들어갈 자리 설정 해주고 변수만 넣어줌