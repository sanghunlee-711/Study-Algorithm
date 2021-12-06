# -*-coding:utf-8-*-
#이중탐색인가 뭐시기 처럼 그냥 반쪼개서 중간값 보고 움직이는게 베스트일것같음..

description = """
문제 설명
리스트 L 과 정수 x 가 인자로 주어질 때, 리스트 내의 올바른 위치에 x 를 삽입하여 그 결과 리스트를 반환하는 함수 solution 을 완성하세요.

인자로 주어지는 리스트 L 은 정수 원소들로 이루어져 있으며 크기에 따라 (오름차순으로) 정렬되어 있다고 가정합니다.

예를 들어, L = [20, 37, 58, 72, 91] 이고 x = 65 인 경우, 올바른 리턴 값은 [20, 37, 58, 65, 72, 91] 입니다.

힌트: 순환문을 이용하여 올바른 위치를 결정하고 insert() 메서드를 이용하여 삽입하는 것이 한 가지 방법입니다.

주의: 리스트 내에 존재하는 모든 원소들보다 작거나 모든 원소들보다 큰 정수가 주어지는 경우에 대해서도 올바르게 처리해야 합니다.
"""

def solution(L, x):
    insertKey = 0
    for num in L:
        if num > x:
            insertKey = L.index(num)
            break

    if insertKey == 0:
        if L[-1] < x:
            L.append(x)
        else:
            L.insert(0,x)
    else:
        L.insert(insertKey, x)
    
    return L
