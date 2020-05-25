n = int(input())
score = list(map(int, input().split()))
M= max(score)

for i in range(n):
  score[i] = score[i]/M*100

rest = sum(score)/n #len(score) 도 동일해짐
print("%.2f" %rest)

"""
%d 십진수
%x 16진수
%o 8진수
%f 실수
%.f 실수 소수점 자리명시 {이거사용함}
%s 문자열출력
%% %자체 출력
"""


