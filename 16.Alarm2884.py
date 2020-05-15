a, b = map(int,input().split("")) # 나열해야하니 map

if(b > 44):
    print('a', 'b - 45')
elif(a >= 1 and b <= 44):
    print('a - 1', 'b + 15')
else:
    print(23, b + 15)
    

"""

23조건 빠자 먹음 ...
a, b = int(input().split())

if(b > 45):
    print('a', 'b - 45')
else:
    print('a - 1', 'b + 15')
"""