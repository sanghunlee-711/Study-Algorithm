# -*- coding: utf-8 -*-
import time

# 어떤 코드의 실행시간 측정을 위한 코드 
n = int(input("Number Of Elements: ")) #사용자가 입력한 숫자
haystack = [k for k in range(n)] #사용자가 입력한 숫자를 통해 리스트를 만듦

print("Searching for the maximum value....")

ts = time.time() # 실행 시작을 위한 시간
maximum = max(haystack)
elapsed = time.time() - ts #실행이 끝난 뒤의 시간

# 어떤리스트가 있을 때 리스트에 있는 값을 전부 다 뒤져보지 않고는 최대값을 찾아낼 수가 없음
# 그래서 단위가 커질 수록 시간이 오래걸림 -> 개수에 비례하는 만큼 시간이 오래걸리게 되는 것
print("Maximum Element = %d, Elapesd Time = %.2f" %(maximum, elapsed))
