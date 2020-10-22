"""
ex)
   342  ->1
x  712  ->2
--------
  684    ->3
   342   ->4
    2394  ->5
---------
  720594  ->6

"""
# Solution 1

num1 = int(a) # 1번
num2 = str(b) # 2번의 숫자 갯수


for i in range(len(num2), 0, 1)#i는 num2의 갯수만큼 부터 0까지 1개씩 실행
    print(num1*num2[i-1])

num3 = int(num2)

print(num1 * num3)

# Solution 2

a = int(input())
b = int(input()) 

c = a * ((b%100)%10)
d = a * (b%100)//10
e = a * (b//100)
f = a * b

print(c, d, e, f, sep='\n') #sep = '\n'이 킬링파트 