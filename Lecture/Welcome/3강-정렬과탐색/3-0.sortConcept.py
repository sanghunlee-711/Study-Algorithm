# -*-coding:utf-8-*-


sort="""
  복수의 원소로 주어진 데이터를 정해진 기준에 따라 새로 늘어놓는 작업입니다

  - sorted()라는 내장함수를 사용해 정렬된 새로운 리스트를 얻어냄
  - List.sort() 리스트의 메서드로 해당 리스트를 정렬하고 리턴 x
  - reverse True옵션으로 역순 정렬 가능
  - 문자열인 경우 정렬순서는 알파벳순서(사전순서)를 따르게 된다.
  - 문자열 길이 순서로 정렬하려면 정렬에 이용하는 키를 지정하면 된다.
  - lambda함수는 익명함수임 -> 정렬을 쓸때는 기준을 정해주기 위해서 사용
"""

L = [3,8,2,7,6,10,9]
L2 = sorted(L)

print("L",L, "L2",L2)

L.sort()
L2 =  sorted(L, reverse=True)

print("L",L, "L2",L2)

L.sort(reverse=True)
print("L",L, "L2",L2)

L = ["abcd", 'xyz', 'spam']
sorted(L, key=lambda x:len(x))

L = ['spam', 'xyz', 'abcd']
sorted(L, key=lambda x:len(x))

# 위 두가지가 다른 결과를 볼 수 있음 ( 오직 길이에 의해서만 정렬해주기에 그럼)

L = [{
  'name':'John', 'score':83
},{
  'name':'Paul', 'score':92
}]

#아래와 같이 정렬도 가능하다 -> 미쳤군 ..

L.sort(key=lambda x:x['name'])
L.sort(key=lambda x: x['score'], reverse=True)
