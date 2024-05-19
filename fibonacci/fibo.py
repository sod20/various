def fibo(n):
    if (n<=1):
        return n
    fiboTable = [1,1]
    for i in range(2,n):
        fiboTable.append(fiboTable[i-2] + fiboTable[i-1])
    return fiboTable[n-1]