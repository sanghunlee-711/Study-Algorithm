"""
# 1st trial[fail]

cases = int(input())

for i in range (1, cases + 1):
    a, b = int(input().split())
    print("Case #%d: %d + %d = %d"%(i+1, a, b, a+b))

#2nd trial[fail]

cases = int(input())

for i in range(cases):
    a ,b =map(int, input().split())
    print("Case#%d: %d + %d = %d", %(i+1, a, b, a+b))
"""
#위에것들 왜 컴파일링 에러떳는지 알아내야함.
cases = int(input())
i = 0
for i in range(cases):
    i += 1
    a,b = map(int, input().split())
    print('Case #%s: %s + %s = %s' %(i,a,b,a+b))