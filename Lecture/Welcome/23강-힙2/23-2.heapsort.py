def heapsort(unsorted):
  H = MaxHeap()
  for item in unsorted:
    H.insert(item)
  sorted = []
  d = H.remove()
  while d:
    sorted.append(d)
    d=H.remove()

  return sorted
