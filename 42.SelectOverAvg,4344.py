n = int(input()) # 테스트 케이스의 개수 C
average = [] #평균 미리 LIST로 만들어 놓음

for i in range(n): #학생들 점수값 기입
  a = list(map(int,input().split()))

  sum = 0 #avg 만들기 위한 사전작업
  
  for j in range(a[0]):
    sum += a[j+1]
  
  cnt = 0 #평균넘는케이스 기입용

  for j in range(a[0]):
    if a[j+1] > sum/a[0]:
      cnt +=1
  average.append(cnt/a[0]*100)
  

for i in range(n):
  print("%.3f%%" %average[i])