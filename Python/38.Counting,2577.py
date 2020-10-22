a= int(input())
b= int(input())
c= int(input())

d = int(a * b * c)
d= str(d) #count(str(i)) 사용을 위함

for i in range(0,10,1):
 print(d.count(str(i))) 
 

 #참고 : https://dongyeopblog.wordpress.com/2016/06/24/python-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%97%90%EC%84%9C-%ED%8A%B9%EC%A0%95%EB%AC%B8%EC%9E%90-%EC%B9%B4%EC%9A%B4%ED%8A%B8%ED%95%98%EB%8A%94%EB%B2%95/